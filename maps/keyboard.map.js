// LANGUAGE KEYBOARD MAPPING

const spanishMap = {
    language: 'es-ES',
    normal: [
        [186, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 39, 161, "Backspace"],
        ["Tab", 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, "*96", 43],
        ["Caps", 97, 115, 100, 102, 103, 104, 106, 107, 108, 241, "*180", 231, "Enter"],
        ["Shift", "&lt", 122, 120, 99, 118, 98, 110, 109, 44, 46, 45, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    capitalized: [
        [186, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 39, 161, "Backspace"],
        ["Tab", 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, "*96", 43],
        ["Caps", 65, 83, 68, 70, 71, 72, 74, 75, 76, 209, "*180", 199, "Enter"],
        ["Shift", "&lt;", 90, 88, 67, 86, 66, 78, 77, 44, 46, 45, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    shifted: [
        [170, 33, 34, 183, 36, 37, "&amp;", 47, 40, 41, 61, 63, 191, "Backspace"],
        ["Tab", 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, "*94", 42],
        ["Caps", 65, 83, 68, 70, 71, 72, 74, 75, 76, 209, "*168", 199, "Enter"],
        ["Shift", "&gt;", 90, 88, 67, 86, 66, 78, 77, 59, 58, 95, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    alternated: [
        [92, 124, 64, 35, 162, 236, 170, 246, 34, 34, "&ne;", "*180", 39, "Backspace"],
        ["Tab", "&oelig;", 230, 128, 174, null, 165, null, null, 248, "&pi;", 91, 93],
        ["Caps", 229, "&int;", "&part;", "&fnof;", "&#63743;", "&trade;", 244, 245, null, 126, 123, 125, "Enter"],
        ["Shift", "&le;", "&Omega;", "&sum;", 184, "&radic;", 223, null, 181, "&bdquo;", null, null, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    emotional: [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, "Backspace"],
        ["Tab", "&#x1F642", "&#x1F970", "&#x1F60B", "&#x1F610", "&#x1F62A", "&#x1F637", "&#x1F615", "&#x1F624", "&#x1F9DF", "&#x1F63A", "&#x1F648", "&#x1F4A9"],
        ["Caps", "&#x1F44B", "&#x1F471", "&#x1F46A", "&#x1F415", "&#x1F332", "&#x1F355", "&#x1F377", "&#x1F30D", "&#x1F3E0", "&#x1F697", "&#x1F570", "&#x1F326", "Enter"],
        ["Shift", "&#x1F389", "&#x1F3AD", "&#x26BD", "&#x1F947", "&#x1F3B2", "&#x1F454", "&#x1F3B5", "&#x1F4BB", "&#x1F58C", "&#x1F4EA", "&#x1F4B5", "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ]
};

// https://www.freecodecamp.org/news/all-emojis-emoji-list-for-copy-and-paste/
// https://www.w3schools.com/charsets/ref_emoji_symbols.asp

const britishMap = {
    language: 'en-GB',
    normal: [
        ["*96", 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, "Backspace"],
        ["Tab", 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 35],
        ["Caps", 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, "Enter"],
        ["Shift", 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    capitalized: [
        ["*96", 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, "Backspace"],
        ["Tab", 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 35],
        ["Caps", 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, "Enter"],
        ["Shift", 92, 90, 88, 67, 86, 66, 78, 77, 44, 46, 47, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    shifted: [
        [172, 33, 34, 163, 36, 37, "*94", "&amp;", 42, 40, 41, 95, 43, "Backspace"],
        ["Tab", 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 126],
        ["Caps", 65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 64, "Enter"],
        ["Shift", 124, 90, 88, 67, 86, 66, 78, 77, "&lt;", "&gt;", 63, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    alternated: [
        [166, null, null, null, 128, null, null, null, null, null, null, null, null, "Backspace"],
        ["Tab", null, null, 233, null, null, null, 250, 237, 243, null, null, null, null],
        ["Caps", 225, null, null, null, null, null, null, null, null, null, null, "Enter"],
        ["Shift", null, null, null, null, null, null, null, null, null, null, null, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    emotional: [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, "Backspace"],
        ["Tab", null, null, null, null, null, null, null, null, null, null, null, null, null],
        ["Caps", null, null, null, null, null, null, null, null, null, null, null, "Enter"],
        ["Shift", null, null, null,null, null,null, null, null, null, null, null, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ]
};

const americanMap = {
    language: 'en-US',
    normal: [
        ["*96", 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, "Backspace"],
        ["Tab", 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92],
        ["Caps", 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, "Enter"],
        ["Shift", 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    capitalized: [
        ["*96", 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, "Backspace"],
        ["Tab", 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 92],
        ["Caps", 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, "Enter"],
        ["Shift", 92, 90, 88, 67, 86, 66, 78, 77, 44, 46, 47, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    shifted: [
        [126, 33, 64, 35, 36, 37, "*94", "&amp;", 42, 40, 41, 45, 43, "Backspace"],
        ["Tab", 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124],
        ["Caps", 65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34, "Enter"],
        ["Shift", 124, 90, 88, 67, 86, 66, 78, 77, "&lt;", "&gt;", 63, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    alternated: [
        [null, 161, 178, 179, 164, 128, 188, 189, 190, 145, 146, 165, 215, "Backspace"],
        ["Tab", 228, 229, 233, 174, 254, 252, 250, 237, 243, 246, 171, 187, 172],
        ["Caps", 225, 223, 240, null, null, null, null, null, 248, 182, "*180", "Enter"],
        ["Shift", 230, null, 169, null, null, 241, 181, 231, null, 191, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    emotional: [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, "Backspace"],
        ["Tab", null, null, null, null, null, null, null, null, null, null, null, null, null],
        ["Caps", null, null, null, null, null, null, null, null, null, null, null, "Enter"],
        ["Shift", null, null, null,null, null,null, null, null, null, null, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ]
};

const italianMap = {
    language: 'it-IT',
    normal: [
        [92, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 39, 236, "Backspace"],
        ["Tab", 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 232, 43, 249],
        ["Caps", 97, 115, 100, 102, 103, 104, 106, 107, 108, 242, 224, "Enter"],
        ["Shift", "&lt;", 122, 120, 99, 118, 98, 110, 109, 44, 46, 45, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    capitalized: [
        [92, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 39, 204, "Backspace"],
        ["Tab", 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 200, 43, 217],
        ["Caps", 65, 83, 68, 70, 71, 72, 74, 75, 76, 210, 192, "Enter"],
        ["Shift", "&lt;", 90, 88, 67, 86, 66, 78, 77, 44, 46, 45, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    shifted: [
        [124, 33, 34, 163, 36, 37, "&amp;", 47, 40, 41, 61, 63, 237, "Backspace"],
        ["Tab", 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 233, 42, 250],
        ["Caps", 65, 83, 68, 70, 71, 72, 74, 75, 76, 231, 243, "Enter"],
        ["Shift", "&gt;", 90, 88, 67, 86, 66, 78, 77, 59, 58, 95, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    alternated: [
        [null, null, null, null, null, null, null, null, null, null, null, "*94", 206, "Backspace"],
        ["Tab", null, null, 128, null, null, null, null, null, null, null, 91, 93, 167],
        ["Caps", null, null, null, null, null, null, null, null, null, 64, 35, "Enter"],
        ["Shift", null, null, null, null, null, null, null, null, 171, 187, 176, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    emotional: [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, "Backspace"],
        ["Tab", null, null, null, null, null, null, null, null, null, null, null, null, null],
        ["Caps", null, null, null, null, null, null, null, null, null, null, null, "Enter"],
        ["Shift", null, null, null,null, null,null, null, null, null, null, null, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ]
};

const frenchMap = {
    language: 'fr-FR',
    normal: [
        [178, "&amp;", 233, 34, 39, 40, 45, 232, 95, 231, 224, 41, 61, "Backspace"],
        ["Tab", 97, 122, 101, 114, 116, 121, 117, 105, 111, 112, "*94", 36, 42],
        ["Caps", 113, 115, 100, 102, 103, 104, 106, 107, 108, 109, 249, "Enter"],
        ["Shift", "&lt;", 119, 120, 99, 118, 98, 110, 44, 59, 58, 33, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    capitalized: [
        [178, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 186, 43, "Backspace"],
        ["Tab", 65, 90, 69, 82, 84, 89, 85, 73, 79, 80, "*168", 163, 181],
        ["Caps", 81, 83, 68, 70, 71, 72, 74, 75, 76, 77, 37, "Enter"],
        ["Shift", "&lt;", 87, 88, 67, 86, 66, 78, 63, 46, 47, 167, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    shifted: [
        [null, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 186, 43, "Backspace"],
        ["Tab", 65, 90, 69, 82, 84, 89, 85, 73, 79, 80, "*168", 163, 181],
        ["Caps", 81, 83, 68, 70, 71, 72, 74, 75, 76, 77, 37, "Enter"],
        ["Shift", "&gt;", 87, 88, 67, 86, 66, 78, 63, 46, 47, 167, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    alternated: [
        [null, null, 126, 35, 123, 91, 124, "*96", 92, "*94", 64, 93, 125, "Backspace"],
        ["Tab", null, null, 128, null, null, null, null, null, null, null, null, 164, null],
        ["Caps", null, null, null, null, null, null, null, null, null, null, null, "Enter"],
        ["Shift", null, null, null, null, null, null, null, null, null, null, null, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    emotional: [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, "Backspace"],
        ["Tab", null, null, null, null, null, null, null, null, null, null, null, null, null],
        ["Caps", null, null, null, null, null, null, null, null, null, null, null, "Enter"],
        ["Shift", null, null, null,null, null,null, null, null, null, null, null, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ]
};

const germanMap = {
    language: 'de-DE',
    normal: [
        ["*94", 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 223, "*180", "Backspace"],
        ["Tab", 113, 119, 101, 114, 116, 122, 117, 105, 111, 112, 252, 43, 35],
        ["Caps", 97, 115, 100, 102, 103, 104, 106, 107, 108, 246, 228, "Enter"],
        ["Shift", "&lt;", 121, 120, 99, 118, 98, 110, 109, 44, 46, 45, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    capitalized: [
        ["*94", 33, 34, 167, 36, 37, "&amp;", 47, 40, 41, 61, 63, "*180", "Backspace"],
        ["Tab", 81, 87, 69, 82, 84, 90, 85, 73, 79, 80, 220, 42, 39],
        ["Caps", 65, 83, 68, 70, 71, 72, 74, 75, 76, 214, 196, "Enter"],
        ["Shift", "&lt;", 89, 88, 67, 86, 66, 78, 77, 59, 58, 45, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    shifted: [
        [186, 33, 34, 167, 36, 37, "&amp;", 47, 40, 41, 61, 63, "*180", "Backspace"],
        ["Tab", 81, 87, 69, 82, 84, 90, 85, 73, 79, 80, 220, 42, 39],
        ["Caps", 65, 83, 68, 70, 71, 72, 74, 75, 76, 214, 196, "Enter"],
        ["Shift", "&gt;", 89, 88, 67, 86, 66, 78, 77, 59, 58, 95, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    alternated: [
        [null, null, 178, 179, null, null, null, 123, 91, 93, 125, 92, null, "Backspace"],
        ["Tab", 64, null, 128, null, null, null, null, null, null, null, null, 126, null],
        ["Caps", null, null, null, null, null, null, null, null, null, null, null, "Enter"],
        ["Shift", 124, null, null, null, null, null, null, 181, null, null, null, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    emotional: [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, "Backspace"],
        ["Tab", null, null, null, null, null, null, null, null, null, null, null, null, null],
        ["Caps", null, null, null, null, null, null, null, null, null, null, null, "Enter"],
        ["Shift", null, null, null,null, null,null, null, null, null, null, null, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ]
};

const russianMap = {
    language: 'ru-RU',
    normal: [
        [235, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, "Backspace"],
        ["Tab", "&#1081;", "&#1094;", "&#1091;", "&#1082;", "&#1077;", "&#1085;", "&#1075;", "&#1096;", "&#1097;", "&#1079;", "&#1093;", "&#1098;", 92],
        ["Caps", "&#1092;", "&#1099;", "&#1074;", "&#1072;", "&#1087;", "&#1088;", "&#1086;", "&#1083;", "&#1076;", "&#1078;", "&#1101;", "Enter"],
        ["Shift", 92, "&#1103;", "&#1095;", "&#1089;", "&#1084;", "&#1080;", "&#1090;", "&#1100;", "&#1073;", "&#1102;", 46, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    capitalized: [
        [203, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, "Backspace"],
        ["Tab", "&#1049;", "&#1062;", "&#1059;", "&#1050;", "&#1045;", "&#1053;", "&#1043;", "&#1064;", "&#1065;", "&#1047;", "&#1061;", "&#1066;", 92],
        ["Caps", "&#1060;", "&#1067;", "&#1042;", "&#1040;", "&#1055;", "&#1056;", "&#1054;", "&#1051;", "&#1044;", "&#1046;", "&#1069;", "Enter"],
        ["Shift", 92, "&#1071;", "&#1063;", "&#1057;", "&#1052;", "&#1048;", "&#1058;", "&#1068;", "&#1041;", "&#1070;", 46, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    shifted: [
        [203, 33, 34, "&#8470;", 59, 37, 58, 63, 42, 40, 41, 95, 43, "Backspace"],
        ["Tab", "&#1049;", "&#1062;", "&#1059;", "&#1050;", "&#1045;", "&#1053;", "&#1043;", "&#1064;", "&#1065;", "&#1047;", "&#1061;", "&#1066;", 47],
        ["Caps", "&#1060;", "&#1067;", "&#1042;", "&#1040;", "&#1055;", "&#1056;", "&#1054;", "&#1051;", "&#1044;", "&#1046;", "&#1069;", "Enter"],
        ["Shift", 47, "&#1071;", "&#1063;", "&#1057;", "&#1052;", "&#1048;", "&#1058;", "&#1068;", "&#1041;", "&#1070;", 44, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    alternated: [
        [null, null, 178, 179, null, "&amp;", null, 123, 91, 93, 125, 92, null, "Backspace"],
        ["Tab", 64, null, 128, null, null, null, null, null, null, null, null, 126, null],
        ["Caps", "&lt;", "&gt;", null, null, null, null, null, null, null, null, null, "Enter"],
        ["Shift", 124, null, null, null, null, null, null, 181, null, null, null, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ],
    emotional: [
        [null, null, null, null, null, null, null, null, null, null, null, null, null, "Backspace"],
        ["Tab", null, null, null, null, null, null, null, null, null, null, null, null, null],
        ["Caps", null, null, null, null, null, null, null, null, null, null, null, "Enter"],
        ["Shift", null, null, null,null, null,null, null, null, null, null, null, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ]
};


// EMOJI KEYS UNFOLDING ARRAYS
// &#x

const happyArray = [
    "&#x1F642", "&#x1F600", "&#x1F601", "&#x1F602", "&#x1F603", "&#x1F604", "&#x1F605", "&#x1F606", "&#x1F607",
    "&#x1F60C", "&#x1F643", "&#x1F911", "&#x1F920", "&#x1F929", "&#x1F4AC", "&#x1F4AD", "&#x1F5E8", "&#x1F5EF"
]

const lovelyArray = [
    "&#x1F970", "&#x1F60D", "&#x1F617", "&#x1F618", "&#x1F619", "&#x1F61A", "&#x1F493", "&#x1F494", "&#x1F495", 
    "&#x1F496", "&#x1F497", "&#x1F498", "&#x1F499", "&#x1F49A", "&#x1F49B", "&#x1F49C", "&#x1F49D", "&#x1F49E", 
    "&#x1F49F", "&#x1F5A4", "&#x1F90D", "&#x1F90E", "&#x1F9E1", "&#x1F48B", "&#x1F917", "&#x1F60A"
]

const playfulArray = [
    "&#x1F60B", "&#x1F608", "&#x1F609", "&#x1F60E", "&#x1F60F", "&#x1F61B", "&#x1F61C", "&#x1F61D", "&#x1F913", 
    "&#x1F923", "&#x1F924", "&#x1F92A", "&#x1F92D", "&#x1F973"
]

const neutralArray = [
    "&#x1F610", "&#x1F611", "&#x1F62C", "&#x1F62E", "&#x1F62F", "&#x1F632", "&#x1F633", "&#x1F636", "&#x1F644",
    "&#x1F910", "&#x1F914", "&#x1F925", "&#x1F928", "&#x1F92B", "&#x1F9D0"
]

const exhaustedArray = [
    "&#x1F62A", "&#x1F629", "&#x1F62B", "&#x1F634", "&#x1F92F", "&#x1F971", "&#x1F975", "&#x1F976", "&#x1F480", 
    "&#x1F4A4"
]

const sickArray = [
    "&#x1F637", "&#x1F616", "&#x1F623", "&#x1F630", "&#x1F631", "&#x1F635", "&#x1F912", "&#x1F915", "&#x1F922", 
    "&#x1F927", "&#x1F92E", "&#x1F974", "&#x1F489", "&#x1F48A"
]

const sadArray = [
    "&#x1F615", "&#x1F613", "&#x1F614", "&#x1F61E", "&#x1F61F", "&#x1F622", "&#x1F625", "&#x1F626", "&#x1F627", 
    "&#x1F628", "&#x1F62D", "&#x1F641", "&#x1F97A"
]

const angryArray = [
    "&#x1F624", "&#x1F612", "&#x1F620", "&#x1F621", "&#x1F47F", "&#x1F92C"
]

const fantasyArray = [
    "&#x1F9DF", "&#x1F9B8", "&#x1F9B9", "&#x1F9D9", "&#x1F9DA", "&#x1F9DB", "&#x1F9DC", "&#x1F9DD", "&#x1F9DE", 
    "&#x1F479", "&#x1F47A", "&#x1F47B", "&#x1F47D", "&#x1F47E", "&#x1F916", "&#x1F921", "&#x1F385", "&#x1F47C", 
    "&#x1F936"
]

const catfaceArray = [
    "&#x1F63A", "&#x1F638", "&#x1F639", "&#x1F63B", "&#x1F63C", "&#x1F63D", "&#x1F63E", "&#x1F63F", "&#x1F640"
]

const monkeyfaceArray = [
    "&#x1F648", "&#x1F649", "&#x1F64A"
]

const bodyArray = [
    "&#x1F4A9", "&#x1F440", "&#x1F441", "&#x1F442", "&#x1F443", "&#x1F444", "&#x1F445", "&#x1F463", "&#x1F4AA",
    "&#x1F9B4", "&#x1F9B5", "&#x1F9B6", "&#x1F9B7", "&#x1F9BB", "&#x1F9BC", "&#x1F9BD", "&#x1F9BE", "&#x1F9BF", 
    "&#x1F9E0"
]

const handgesturesArray = [
    "&#x1F44B", "&#x270B", "&#x1F590", "&#x1F596", "&#x1F91A", "&#x261D", "&#x1F446", "&#x1F447", "&#x1F448", 
    "&#x1F449", "&#x1F595", "&#x270A", "&#x1F44A", "&#x1F44D", "&#x1F44E", "&#x1F91B", "&#x1F91C", "&#x270C", 
    "&#x1F44C", "&#x1F90F", "&#x1F918", "&#x1F919", "&#x1F91E", "&#x1F91F", "&#x270D", "&#x1F44F", "&#x1F450", 
    "&#x1F485", "&#x1F91D", "&#x1F932", "&#x1F933", "&#x1F645", "&#x1F646", "&#x1F647", "&#x1F64B", "&#x1F64C",
    "&#x1F64D", "&#x1F64E", "&#x1F64F", "&#x1F926", "&#x1F937", "&#x1F9CF"
]

const personArray = [
    "&#x1F471", "&#x1F46E", "&#x1F470", "&#x1F472", "&#x1F473", "&#x1F477", "&#x1F478", "&#x1F574", "&#x1F575", 
    "&#x1F481", "&#x1F482", "&#x1F934", "&#x1F935", "&#x1F930", "&#x1F464", "&#x1F466", "&#x1F467", "&#x1F468", 
    "&#x1F469", "&#x1F471", "&#x1F474", "&#x1F475", "&#x1F476", "&#x1F9CD", "&#x1F9CE", "&#x1F9D1", "&#x1F9D2", 
    "&#x1F9D3", "&#x1F9D4", "&#x1F9D5", "&#x1F9D6", "&#x1F9B0", "&#x1F9B1", "&#x1F9B2", "&#x1F9B3", "&#x1F486", 
    "&#x1F487", "&#x1F5E3"
]

const peopleArray = [
    "&#x1F46A", "&#x1F46F", "&#x1F46B", "&#x1F46C", "&#x1F46D", "&#x1F46F", "&#x1F491", "&#x1F931", "&#x1F465"
]

const cosmicArray = [
    "&#x1F30D", "&#x1F4AB"
]

const buildingArray = [
    "&#x1F3E0", "&#x1F488", "inside", "&#x1F5BC"
]

const transportArray = [
    "&#x1F697", "&#x1F680", "&#x1F681", "&#x1F682", "&#x1F683", "&#x1F684", "&#x1F685", "&#x1F686", "&#x1F687", 
    "&#x1F688", "&#x1F689", "&#x1F68A", "&#x1F68B", "&#x1F68C", "&#x1F68D", "&#x1F68E", "&#x1F68F", "&#x1F690",
    "&#x1F691", "&#x1F692", "&#x1F693", "&#x1F694", "&#x1F695", "&#x1F696", "&#x1F697", "&#x1F698", "&#x1F699",
    "&#x1F69A", "&#x1F69B", "&#x1F69C", "&#x1F69D", "&#x1F69E", "&#x1F69F", "&#x1F6A0", "&#x1F6A1", "&#x1F6A2", 
    "&#x1F6A3", "&#x1F6A4", "&#x1F6E5", "&#x1F6E9", "&#x1F6EB", "&#x1F6EC", "&#x1F6F0", "&#x1F6F3", "&#x1F6F4", 
    "&#x1F6F5", "&#x1F6F6", "&#x1F6F7", "&#x1F6F8", "&#x1F6F9", "&#x1F6FA"
]

const timeArray = [
    "&#x1F570", "&#x1F550", "&#x1F551", "&#x1F552", "&#x1F553", "&#x1F554", "&#x1F555", "&#x1F556", "&#x1F557", 
    "&#x1F558", "&#x1F559", "&#x1F55A", "&#x1F55B", "&#x1F55C", "&#x1F55D", "&#x1F55E", "&#x1F55F", "&#x1F560",
    "&#x1F561", "&#x1F562", "&#x1F563", "&#x1F564", "&#x1F565", "&#x1F566", "&#x1F567"
]

const celebrationArray = [
    "&#x1F389", "&#x1F483", "&#x1F57A", "&#x1F492", ""
]

const sportsArray = [
    "&#x26BD", "&#x1F9D7", "&#x1F9D8"
]

const preciousArray = [
    "&#x1F947", "&#x1F48D", "&#x1F48E"
]

const clothingArray = [
    "&#x1F454", "&#x1F484"
]

const soundArray = [
    "&#x1F3B5", "&#x1F4E2", "&#x1F4E3"
]

const officeArray = [
    "&#x1F4BB", "&#x1F5A5", "&#x1F5C2", "&#x1F5C3", "&#x1F5C4", "&#x1F5D1", "&#x1F5D2", "&#x1F5D3", "&#x1F4BA",
    "&#x1F4BC", "&#x1F4BD", "&#x1F4BE", "&#x1F4BF", "&#x1F4C0", "&#x1F4C1", "&#x1F4C2", "&#x1F4C5", "&#x1F4C6", 
    "&#x1F4C7", "&#x1F4C8", "&#x1F4C9", "&#x1F4CA", "&#x1F4CB", "&#x1F4CC", "&#x1F4CD", "&#x1F4CE", "&#x1F4CF", 
    "&#x1F4D0", "&#x1F4D1", "&#x1F4DB", "&#x1F4DE", "&#x1F4DF", "&#x1F4E0", "&#x1F4E1", "&#x1F50B", "&#x1F50C", 
    "&#x1F587", "&#x1F4F1", "&#x1F4F2", "&#x1F4F3", "&#x1F4F4", "&#x1F4F5", "&#x1F4F6", "&#x1F5B2"
]

const writingArray = [
    "&#x1F58C", "&#x1F58A", "&#x1F58B", "&#x1F58D", "&#x1F4C3", "&#x1F4C4", "&#x1F4D2", "&#x1F4D3", "&#x1F4D4", 
    "&#x1F4D5", "&#x1F4D6", "&#x1F4D7", "&#x1F4D8", "&#x1F4D9", "&#x1F4DA", "&#x1F4DC", "&#x1F4DD"
]

const mailingArray = [
    "&#x1F4EA", "&#x1F48C", "&#x1F5F3", "&#x1F4E4", "&#x1F4E5", "&#x1F4E6", "&#x1F4E7", "&#x1F4E8", 
    "&#x1F4E9", "&#x1F4EB", "&#x1F4EC", "&#x1F4ED", "&#x1F4EE", "&#x1F4EF", "&#x1F4F0", "&#x1F5DE"
]


const toolArray = [
    "&#x1F5DC", "&#x1F5DD", "&#x1F5E1"
]