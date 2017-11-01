'use strict';

// LVL 1 namespaces
const app_ = "app";
const story_ = "story";

// LVL 2 namespaces
const EDIT = ":edit";
const NAV = ":nav";
const IO = ":io";

// LVL 3 namespaces
const SETTINGS = "+settings";
const ABOUT = "+about";
const HELP = "+help";
const FILES = "+files";
const KNOT = "+knot";
const STITCH = "+stitch";
const NODE = "+node";

// LVL 4 namespaces
const SAVE = ".save";
const SAVEAS = SAVE+"as";
const OPEN = ".open";
const CLOSE = ".close";
const IMPORT = ".import";
const EXPORT = ".export";
const CREATE = ".create";
const RENAME = ".rename";
const UPDATE = ".update";
const DELETE = ".delete";

const events = {
    STORY : {
        NAV : {
            KNOT : {
                OPEN : story_+NAV+KNOT+OPEN,
                CLOSE : story_+NAV+KNOT+CLOSE,
                GOTO : story_+NAV+KNOT
            },
            STITCH : {
                OPEN : story_+NAV+STITCH+OPEN,
                CLOSE : story_+NAV+STITCH+CLOSE,
                GOTO : story_+NAV+STITCH
            },
            NODE : {
                OPEN : story_+NAV+NODE+OPEN,
                CLOSE : story_+NAV+NODE+CLOSE,
                GOTO : story_+NAV+NODE
            }
        },
        EDIT : {
            KNOT : {
                CREATE : story_+NAV+KNOT+CREATE,
                RENAME : story_+NAV+KNOT+RENAME,
                UPDATE : story_+NAV+KNOT+UPDATE,
                DELETE : story_+NAV+KNOT+DELETE
            },
            STITCH : {
                CREATE : story_+NAV+STITCH+CREATE,
                RENAME : story_+NAV+STITCH+RENAME,
                UPDATE : story_+NAV+STITCH+UPDATE,
                DELETE : story_+NAV+STITCH+DELETE
            },
            NODE : {
                CREATE : story_+NAV+NODE+CREATE,
                RENAME : story_+NAV+NODE+RENAME,
                UPDATE : story_+NAV+NODE+UPDATE,
                DELETE : story_+NAV+NODE+DELETE
            },
        }
    },
    APP : {
        IO : {
            FILES : {
                IMPORT : app_+IO+FILES+IMPORT,
                EXPORT : app_+IO+FILES+EXPORT,
                SAVE : app_+IO+FILES+SAVE,
                SAVEAS : app_+IO+FILES+SAVEAS,
                OPEN : app_+IO+FILES+OPEN,
                CLOSE : app_+IO+FILES+CLOSE,
                CREATE : app_+IO+FILES+CREATE,
                RENAME : app_+IO+FILES+RENAME,
                DELETE : app_+IO+FILES+DELETE
            }
        },
        NAV : {
            ABOUT : {
                OPEN : app_+NAV+ABOUT+OPEN,
                CLOSE : app_+NAV+ABOUT+OPEN
            },
            HELP : {
                OPEN : app_+NAV+HELP+OPEN,
                CLOSE : app_+NAV+HELP+OPEN
            },
            SETTINGS : {
                OPEN : app_+NAV+SETTINGS+OPEN,
                CLOSE : app_+NAV+SETTINGS+OPEN
            }
        },
        EDIT : {
            SETTINGS : {
                UPDATE : app_+EDIT+SETTINGS+UPDATE,
                DELETE : app_+EDIT+SETTINGS+DELETE
            }
        }
    }
}

export {events as default};

export const APP = events.APP;
export const APP_NAV = events.APP.NAV;
export const APP_NAV_ABOUT = events.APP.NAV.ABOUT;
export const APP_NAV_HELP = events.APP.NAV.HELP;
export const APP_NAV_SETTINGS = events.APP.NAV.SETTINGS;
export const APP_EDIT = events.APP.EDIT;
export const APP_EDIT_SETTINGS = events.APP.EDIT.SETTINGS;
export const APP_IO = events.APP.IO;
export const APP_IO_FILES = events.APP.IO.FILES;
export const STORY = events.STORY;
export const STORY_NAV = events.STORY.NAV;
export const STORY_NAV_KNOT = events.STORY.NAV.KNOT;
export const STORY_NAV_STITCH = events.STORY.NAV.STITCH;
export const STORY_NAV_NODE = events.STORY.NAV.NODE;
export const STORY_EDIT = events.STORY.EDIT;
export const STORY_EDIT_KNOT = events.STORY.EDIT.KNOT;
export const STORY_EDIT_STITCH = events.STORY.EDIT.STITCH;
export const STORY_EDIT_NODE = events.STORY.EDIT.NODE;