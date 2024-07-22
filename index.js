//Current line
var CurrentId = undefined;
const word_list = [
  "abruptly",
  "absurd",
  "abyss",
  "affix",
  "askew",
  "avenue",
  "awkward",
  "axiom",
  "azure",
  "bagpipes",
  "bandwagon",
  "banjo",
  "bayou",
  "beekeeper",
  "bikini",
  "blitz",
  "blizzard",
  "boggle",
  "bookworm",
  "boxcar",
  "boxful",
  "buckaroo",
  "buffalo",
  "buffoon",
  "buxom",
  "buzzard",
  "buzzing",
  "buzzwords",
  "caliph",
  "cobweb",
  "cockiness",
  "croquet",
  "crypt",
  "curacao",
  "cycle",
  "daiquiri",
  "dirndl",
  "disavow",
  "dizzying",
  "duplex",
  "dwarves",
  "embezzle",
  "equip",
  "espionage",
  "euouae",
  "exodus",
  "faking",
  "fishhook",
  "fixable",
  "fjord",
  "flapjack",
  "flopping",
  "fluffiness",
  "flyby",
  "foxglove",
  "frazzled",
  "frizzled",
  "fuchsia",
  "funny",
  "gabby",
  "galaxy",
  "galvanize",
  "gazebo",
  "giaour",
  "gizmo",
  "glowworm",
  "glyph",
  "gnarly",
  "gnostic",
  "gossip",
  "grogginess",
  "haiku",
  "haphazard",
  "hyphen",
  "iatrogenic",
  "icebox",
  "injury",
  "ivory",
  "ivy",
  "jackpot",
  "jaundice",
  "jawbreaker",
  "jaywalk",
  "jazziest",
  "jazzy",
  "jelly",
  "jigsaw",
  "jinx",
  "jiujitsu",
  "jockey",
  "jogging",
  "joking",
  "jovial",
  "joyful",
  "juicy",
  "jukebox",
  "jumbo",
  "kayak",
  "kazoo",
  "keyhole",
  "khaki",
  "kilobyte",
  "kiosk",
  "kitsch",
  "kiwifruit",
  "klutz",
  "knapsack",
  "larynx",
  "lengths",
  "lucky",
  "luxury",
  "lymph",
  "marquis",
  "matrix",
  "megahertz",
  "microwave",
  "mnemonic",
  "mystify",
  "naphtha",
  "nightclub",
  "nowadays",
  "numbskull",
  "nymph",
  "onyx",
  "ovary",
  "oxidize",
  "oxygen",
  "pajama",
  "peekaboo",
  "phlegm",
  "pixel",
  "pizazz",
  "pneumonia",
  "polka",
  "pshaw",
  "psyche",
  "puppy",
  "puzzling",
  "quartz",
  "queue",
  "quips",
  "quixotic",
  "quiz",
  "quizzes",
  "quorum",
  "razzmatazz",
  "rhubarb",
  "rhythm",
  "rickshaw",
  "schnapps",
  "scratch",
  "shiv",
  "snazzy",
  "sphinx",
  "spritz",
  "squawk",
  "staff",
  "strength",
  "strengths",
  "stretch",
  "stronghold",
  "stymied",
  "subway",
  "swivel",
  "syndrome",
  "thriftless",
  "thumbscrew",
  "topaz",
  "transcript",
  "transgress",
  "transplant",
  "triphthong",
  "twelfth",
  "twelfths",
  "unknown",
  "unworthy",
  "unzip",
  "uptown",
  "vaporize",
  "vixen",
  "vodka",
  "voodoo",
  "vortex",
  "voyeurism",
  "walkway",
  "waltz",
  "wave",
  "wavy",
  "waxy",
  "wellspring",
  "wheezy",
  "whiskey",
  "whizzing",
  "whomever",
  "wimpy",
  "witchcraft",
  "wizard",
  "woozy",
  "wristwatch",
  "wyvern",
  "xylophone",
  "yachtsman",
  "yippee",
  "yoked",
  "youthful",
  "yummy",
  "zephyr",
  "zigzag",
  "zigzagging",
  "zilch",
  "zipper",
  "zodiac",
  "zombie",
];
stages = [
  `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========
`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========
`,
  `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========
`,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========
`,
  `
  +---+
  |   |
  O   |
      |
      |
      |
=========
`,
  `
  +---+
  |   |
      |
      |
      |
      |
=========
`,
];

const logo = `www.appbrewery.com
 _                                             
| |                                            
| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  
| '_ \\ / _' | '_ \\ / _' | '_ ' _ \\ / _' | '_ \\ 
| | | | (_| | | | | (_| | | | | | | (_| | | | |
|_| |_|\\__,_|_| |_|\\__, |_| |_| |_|\\__,_|_| |_|
                    __/ |                      
                   |___/
`;

var inputValues = [];

const inputPrompts = [];

let lives = 6;
let end_of_game = false;
let chosen_word;
let display = "";

//Click Run
$(document).ready(function () {
  $("#run-button").click(function () {
    inputValues = [];

    chosen_word = word_list[Math.floor(Math.random() * word_list.length)];
    word_length = chosen_word.length;
    end_of_game = false;
    lives = 6;
    display = "";
    for (let i = 0; i < chosen_word.length; i++) {
      display += "_";
    }

    $("#Content").empty();
    NewLine(logo, false);
    NewLine("Word to guess: " + display, false);
    // NewLine("Pssst, the solution is " + chosen_word + ".", false);
    NewLine("Guess a letter: ", true);
  });
});

//Enter button
$(document).on("keydown", function (e) {
  var x = event.which || event.keyCode;
  if (x === 13 || x == 13) {
    var consoleLine = $("#" + CurrentId + " input").val();
    inputValues.push({ id: CurrentId, val: consoleLine });

    const guess = consoleLine.toLowerCase().trim();

    if (display.includes(guess)) {
      NewLine("You've already guessed " + guess, false);
    }

    if (!chosen_word.includes(guess)) {
      NewLine(
        `You guessed ${guess}, that's not in the word. You lose a life.`,
        false
      );

      lives -= 1;
      if (lives <= 0) {
        end_of_game = true;
        NewLine(
          `***********************IT WAS ${chosen_word}! YOU LOSE**********************`,
          false
        );
        $(".console-carrot").remove();
        return;
      }
    } else {
      for (index in chosen_word) {
        const letter = chosen_word[index];
        if (letter == guess) {
          display = display.replaceAt(index, guess);
          console.log(display + index);
        }
      }
      NewLine(display, false);
    }

    if (!display.includes("_")) {
      end_of_game = true;
      NewLine("You win.", false);
      $(".console-carrot").remove();
      return;
    }

    NewLine(stages[lives], false);

    $(".console-carrot").remove();
    NewLine(
      `****************************${lives}/6 LIVES LEFT****************************`,
      false
    );
    NewLine("Word to guess: " + display, false);
    NewLine("Guess a letter: ", true);
  }
});
$(document).on("keydown", function (e) {
  var x = event.which || event.keyCode;
  var line = $("#" + CurrentId + " input");
  var length = line.val().length;
  if (x != 8) {
    line.attr("size", 1 + length);
  } else {
    line.attr("size", length * 0.95);
  }
  if (length === 0) {
    $("#" + CurrentId + " input").attr("size", "1");
  }
});
$(document).on("click", function (e) {
  $("#" + CurrentId + " input").focus();
});

//New line
function NewLine(text, isPrompt) {
  $(".console-carrot").remove();
  if (CurrentId !== undefined) {
    $("#" + CurrentId + " input").prop("disabled", true);
  }
  CurrentId = "consoleInput-" + GenerateId();

  if (isPrompt) {
    $("#Content").append(
      //One Line
      '<div id="' +
        CurrentId +
        '">' +
        text +
        '<input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" type="text" class="terminal-input" /><div class="console-carrot"></div></div>'
    );
    $("#" + CurrentId + " input").focus();
    $("#" + CurrentId + " input").attr("size", "1");
  } else {
    $("#Content").append('<div id="' + CurrentId + '">' + text + "</div>");
  }

  document.getElementById(CurrentId).scrollIntoView();
}

function GenerateId() {
  return Math.random().toString(16).slice(2);
}

String.prototype.replaceAt = function (index, replacement) {
  console.log(this.substring(3) + "hello  ");
  let newString =
    this.substring(0, index) +
    replacement +
    this.substring(Number(index) + replacement.length);

  //  replacement + currentString.substring(index + replacement.length);
  return newString;
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
