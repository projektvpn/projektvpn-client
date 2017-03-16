// index.js: runs in the background page and sometimes opens windows.

// Note that any uncaught errors in this context will kill the background page.
// You need to have a window open so that you can "inspect background page" and
// see the console.

console.log('Background page started.')

// Set a secure umask for any files we create (like the cjdns password file)
process.umask(0o077)

// We'll set this with our one window if/when it's wanted
var win = null;
var tray = null;

// Open up a window that's not visible.
// The window code can do all our actual VPN client work.
// TODO: set show false to start up in the background
nw.Window.open('index.html', {
    show: true,
    width: 600,
    height: 400,
    frame: false,
    icon: 'img/icon.png'
}, function(new_win) {
  // Remember the window
  win = new_win
  win.on('close', function() {
    this.hide() // Close to tray
  })
  win.setResizable(false)
})

// Create the UI if not created, and display it otherwise
function show_ui() {
  if (win) {
    // Show the window we have
    win.show()
  }
}

// Quit the application
function quit() {
  if (win) {
    win.hide()
  }
  tray.remove()
  process.exit()
}

tray = new nw.Tray({ icon: 'img/icon.png', iconsAreTemplates: false })
tray.tooltip = 'ProjektVPN'
// Show the UI when the icon is left-clicked
tray.on('click', function() {
  show_ui()
})

// Set up system tray menu
var menu = new nw.Menu();
menu.append(new nw.MenuItem({ label: 'Show UI', click: show_ui }))
menu.append(new nw.MenuItem({ label: 'Quit', click: quit }))
tray.menu = menu



