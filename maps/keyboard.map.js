const spanishMap = {
    language: 'es-ES',
    normal: [
        [186, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 39, 161, "Backspace"],
        ["Tab", 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, "*96", 43, "Enter"],
        ["Caps", 97, 115, 100, 102, 103, 104, 106, 107, 108, 241, "*180", 231, "Enter"],
        ["Shift", "&lt;", 122, 120, 99, 118, 98, 110, 109, 44, 46, 45, "Shift"],
        ["Control", null, "Alt", "Space", "Alt", null, null, "Control"]
    ],
    capitalized: [
        [186, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 39, 161, "Backspace"],
        ["Tab", 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, "*96", 43, "Enter"],
        ["Caps", 65, 83, 68, 70, 71, 72, 74, 75, 76, 209, "*180", 199, "Enter"],
        ["Shift", "&lt;", 90, 88, 67, 86, 66, 78, 77, 44, 46, 45, "Shift"],
        ["Control", null, "Alt", "Space", "Alt", null, null, "Control"]
    ],
    shifted: [
        [170, 33, 34, 183, 36, 37, "&amp;", 47, 40, 41, 61, 63, 191, "Backspace"],
        ["Tab", 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, "*94", 42, "Enter"],
        ["Caps", 65, 83, 68, 70, 71, 72, 74, 75, 76, 209, "*168", 199, "Enter"],
        ["Shift", "&gt;", 90, 88, 67, 86, 66, 78, 77, 59, 58, 95, "Shift"],
        ["Control", null, "Alt", "Space", "Alt", null, null, "Control"]
    ],
    alternated: [
        [92, 124, 64, 35, 162, 236, 170, 246, 34, 34, "&ne;", "*180", 39, "Backspace"],
        ["Tab", "&oelig;", 230, 128, 174, 134, 165, null, null, 248, "&pi;", 91, 93, "Enter"],
        ["Caps", 229, "&int;", "&part;", "&fnof;", "&#63743;", "&trade;", 244, 245, null, 126, 123, 125, "Enter"],
        ["Shift", "&le;", "&Omega;", "&sum;", 184, "&radic;", 223, null, 181, "&bdquo;", 133, 150, "Shift"],
        ["Control", null, "Alt", "Space", "Alt", null, null, "Control"]
    ]
};

const britishMap = {
    language: 'en-GB',
    normal: [
        [],
        [],
        [],
        [],
        []
    ],
    capitalized: [
        [],
        [],
        [],
        [],
        []
    ],
    shifted: [
        [],
        [],
        [],
        [],
        []
    ],
    alternated: [
        [],
        [],
        [],
        [],
        []
    ]
};

const americanMap = {
    language: 'en-US',
    normal: [
        [],
        [],
        [],
        [],
        []
    ],
    capitalized: [
        [],
        [],
        [],
        [],
        []
    ],
    shifted: [
        [],
        [],
        [],
        [],
        []
    ],
    alternated: [
        [],
        [],
        [],
        [],
        []
    ]
};

const italianMap = {
    language: 'it-IT',
    normal: [
        [],
        [],
        [],
        [],
        []
    ],
    capitalized: [
        [],
        [],
        [],
        [],
        []
    ],
    shifted: [
        [],
        [],
        [],
        [],
        []
    ],
    alternated: [
        [],
        [],
        [],
        [],
        []
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
        ["Shift", null, null, null, null, null, null, null, null, null, null, null, "Enter"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ]
};

const germanMap = {
    language: 'de-DE',
    normal: [
        ["*94", 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 337, "*180", "Backspace"],
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
        ["*94", 33, 34, 167, 36, 37, "&amp;", 47, 40, 41, 61, 63, "*180", "Backspace"],
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
        [null, null, 178, 179, null, null, null, 123, 91, 93, 125, 92, null, "Backspace"],
        ["Tab", 64, null, 128, null, null, null, null, null, null, null, null, 126, null],
        ["Caps", null, null, null, null, null, null, null, null, null, null, null, "Enter"],
        ["Shift", 124, null, null, null, null, null, null, 181, null, null, null, "Shift"],
        ["Control", "Emoji", "Alt", "Space", "Alt", "Esc", "Control"]
    ]
};