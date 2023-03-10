import arrowIcon from "../img/icons/arrow_down.svg";
import menuIcon from "../img/icons/menu.svg";
import heartIcon from "../img/icons/favorite_border.svg";
import ZoomIn from "../img/icons/zoom.svg";
import runIcon from "../img/icons/run.svg";
import avatar from "../img/profile.jpg";
import savedProject from "../img/icons/add_task.svg";
import downloadedProject from "../img/icons/downloaded.svg";
import backIcon from "../img/icons/back.svg";

class TemplateUi {
  constructor() {}

  headerUi() {
    const template = `
        <header class="shadow-sm d-flex space-between">
            <div class="logo">
                <strong style="padding: 0 0.6rem; letter-spacing: 1px;font-size: 18px;"><b style="color:#fdd835">Just</b>Console</strong>
            </div>
        <div class="nav d-flex f-row">
            <div class="dropdown">
                <button id="dropdown-btn">
                    <span>
                        Menu
                    </span>
                    <img style="margin-left: 0.4rem;" src="${arrowIcon}" alt="arrow">
                </button>
                <div class="dropdown-content shadow-sm" id="dropdown-content" data-dropdown>

                    <div class="menu-title">
                        Settings
                    </div>
                    <nav>
                        <input type='file' multiple accept='image/*' id="images" class="d-none">
                        <a id="new-project" onclick="file.click()">New Project</a>
                        <a data-import>Import Images</a>
                        <a data-save>Save...</a>
                        <a name="welcome" class="open-file">Shortcuts</a>
                    </nav>

                    <div class="menu-title">
                        Pages
                    </div>
                    <nav>
                        <a name="html" class="open-file">HTML File</a>
                        <a name="js" class="open-file">JAVASCRIPT File</a>
                        <a name="css" class="open-file">CSS File</a>
                    </nav>
                    <div class="menu-title">
                        LAYOUTS
                    </div>
                    <nav>
                        <a class="layout-btn" name="show-all">Show All</a>
                        <a class="layout-btn" name="hide-console">Hide Console</a>
                        <a class="layout-btn" name="hide-preview">Hide Preview</a>
                    </nav>
                </div>
            </div>

            <button class="btn-rounded" data-sidenav-btn>
                <img  src="${menuIcon}" alt="menu">
            </button>
        </div>
        </header>
        `;
    return template;
  }

  footerUi() {
    const template = `
        <footer class="shadow d-flex f-row space-between">
            <small id="copyright">
                &copy; Copyright 2023
            </small>
            <small>
                Made with <img src=${heartIcon} class="white"> by Anup Jha
            </small>
       </footer>
        `;
    return template;
  }

  terminalUi() {
    const template = `
            <div class="console-header d-flex f-row space-between">
                CONSOLE
            </div>
            <div id="console-ui" title="console">
                <div class="terminal-prompt">
                    <a style="font-size: 14px;">Terminal Prompt</a>
                </div>
                <div class="prompts" data-terminal></div>
            </div>
        `;

    return template;
  }

  previewUi() {
    const template = `
        <div class="preview-header d-flex f-row space-between">
            <a>
                RESULT VIEW
            </a>
            <a class="zoom-icon" data-zoom>
                <img src=${ZoomIn} alt="Full screen">
            </a>
        </div>
        <iframe id="iframe-preview" target="_blank" frameborder="0" title="preview"></iframe>
        `;

    return template;
  }

  codeUi() {
    const template = `
        <div class="windows">
        <button class="tablink active"  name="welcome" id="welcomewindow">Welcome page &nbsp;&nbsp;
            <span style="font-size: 16px; vertical-align: middle;" data-close-icon>&#10005;</span>
        </button>
        <button class="tablink" name="js" id="jswindow">script.js &nbsp;&nbsp;
            <span style="font-size: 16px; vertical-align: middle;" data-close-icon>&#10005;</span>
        </button>
        <button class="tablink" name="html" id="htmlwindow">
            index.html &nbsp;&nbsp;
            <span style="font-size: 16px; vertical-align: middle;" data-close-icon>&#10005;</span>
        </button>
        <button class="tablink" name="css" id="csswindow">style.css &nbsp;&nbsp;
            <span style="font-size: 16px; vertical-align: middle;" data-close-icon>&#10005;</span>
        </button>
   </div>

   <div id="welcome" class="tabcontent">
    <div class="content">
        <h2 class="mb-1 mt-1">Welcome to <span class="text-accent">JustConsole</span></h2>
         <p style="max-width: 95%;">
             An interactive online playground which helps you to quickly create snippets or even test your javascript, HTML and CSS knowledge. <br><br>
        </p>
        <h3 class="text-accent mt-1">Keyboard Shortcuts</h3>
        <div class="shortcuts">
            <h4 class="title">General</h4>
            <table>
                <tr>
                    <td>Ctrl-K Ctrl-D</td>
                    <td>skip and select next occurrence</td>
                </tr>
                <tr>
                    <td>shift+Ctrl+S</td>
                    <td>Save Project</td>
                </tr>
                <tr>
                    <td>ctrl+U</td>
                    <td>Soft undo</td>
                </tr>
                <tr>
                    <td>ctrl+Y</td>
                    <td>Redo or repeat last keyboard shortcut command</td>
                </tr>
                <tr>
                    <td>shift+ctrl+A</td>
                    <td>Select tag</td>
                </tr>
                <tr>
                    <td>ctrl+A</td>
                    <td>Select All</td>
                </tr>
              </table>

              <h4 class="title">Text Editing</h4>
              <table>
                  <tr>
                      <td>ctrl+Kctrl+K</td>
                      <td>Delete from cursor to end of line</td>
                  </tr>
                  <tr>
                      <td>ctrl+Kctrl+BACKSPACE</td>
                      <td>Delete from cursor to start of line</td>
                  </tr>
                  <tr>
                      <td>shift+ctrl+D</td>
                      <td>Duplicate line(s)</td>
                  </tr>
                  <tr>
                      <td>ctrl+/</td>
                      <td>Comment/un-comment current line</td>
                  </tr>
                  <tr>
                      <td>ctrl+[SPACE]</td>
                      <td>Select next auto-complete suggestion</td>
                  </tr>
                  <tr>
                    <td>ctrl+MouseLeftButton</td>
                    <td>Multi-Cursors</td>
                  </tr>
                </table>

                <h4 class="title">Find/Replace</h4>
                <table>
                    <tr>
                        <td>ctrl+F</td>
                        <td>Find</td>
                    </tr>
                    <tr>
                        <td>ctrl+H</td>
                        <td>Replace</td>
                    </tr>
                    <tr>
                        <td>shift+ctrl+F</td>
                        <td>Find and Replace</td>
                    </tr>
                </table>
        </div>
    </div>
</div>
    <div id="js" class="tabcontent">
        <textarea name="js-code" id="js-code"></textarea>
        <button class="btn-run" data-run>
            <img src=${runIcon}>
            <span>RUN</span>
        </button>
    </div>

    <div id="html" class="tabcontent">
        <textarea name="html-code" id="html-code"></textarea>
    </div>

    <div id="css" class="tabcontent">
        <textarea name="css-code" id="css-code"></textarea>
    </div>
        `;
    return template;
  }

  sidenavUi() {
    const template = `
        <div id="sidenav" class="shadow-sm" onclick="event.stopPropagation();">

        <nav class="settings">
            <ul>
                <li class="aside-menu active">
                    <a>
                        <img src=${avatar}>
                        My Session
                    </a>
                </li>
                <li class="aside-menu">
                    <a>
                        <img class="icons" src="${savedProject}">
                        Recently Saved
                    </a>
                </li>
                <li class="aside-menu">
                    <a>
                        <img class="icons" src="${downloadedProject}">
                        To Download
                    </a>
                </li>
            </ul>
            <div class="separator"></div>
            <div class="theme">
                <strong>Theme</strong>
                <div class="d-flex f-row" style="margin-top: 0.5rem;">
                    <span class="dark-blue theme" name="default-theme"></span>
                    <span class="dark theme" name="dark-theme"></span>
                </div>
            </div>
        </nav>

        <div class="content">
            <button id="go-back" class="shadow-sm">
                <img src=${backIcon}>
            </button>
            <div class="account" data-tab>
                <h4>Session ID:</h4>
                <small id="sessionId">None</small>
                <button class="btn-outline btn-danger" id="btn-session-delete">Remove My Session</button>
                <div class="separator"></div>
                <form id="loginForm" name="loginForm">
                    <div class="form-group">
                        <label for="sessionName">Session Name</label><br>
                        <small>log in using your session name</small>
                        <input name="sessionName" style="margin-top:0.5rem" type="text"  autocomplete="off"
                         id="sessionName" required class="form-control" placeholder="Enter a name">
                    </div>
                    <input type="submit" value="Create A Session" data-create-session-btn>
                </form>
                <button class="btn-outline btn-danger" data-logout>Logout</button>
            </div>
            <div class="recently-saved" data-tab>
                <h4>Recently Saved</h4>
                <table data-recently-saved-area></table>
            </div>
            <div class="downloaded" data-tab>
                <h4>To Download</h4>
                <table data-download-area></table>
            </div>
        </div>

    </div>
        `;
    return template;
  }
}

export default TemplateUi;
