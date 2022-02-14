import '../wordle-styling/WordlePage.css'

import {BackspaceTwoTone} from '@mui/icons-material';
import $ from "jquery"
import { useEffect } from 'react';

export default function WordlePage() {
    const dictionary = ["about",
                        "above",
                        "abuse",
                        "actor",
                        "acute",
                        "admit",
                        "adopt",
                        "adult",
                        "after",
                        "again",
                        "agent",
                        "agree",
                        "ahead",
                        "alarm",
                        "album",
                        "alert",
                        "alike",
                        "alive",
                        "allow",
                        "alone",
                        "along",
                        "alter",
                        "among",
                        "anger",
                        "Angle",
                        "angry",
                        "apart",
                        "apple",
                        "apply",
                        "arena",
                        "argue",
                        "arise",
                        "array",
                        "aside",
                        "asset",
                        "audio",
                        "audit",
                        "avoid",
                        "award",
                        "aware",
                        "badly",
                        "baker",
                        "bases",
                        "basic",
                        "basis",
                        "beach",
                        "began",
                        "begin",
                        "begun",
                        "being",
                        "below",
                        "bench",
                        "billy",
                        "birth",
                        "black",
                        "blame",
                        "blind",
                        "block",
                        "blood",
                        "board",
                        "boost",
                        "booth",
                        "bound",
                        "brain",
                        "brand",
                        "bread",
                        "break",
                        "breed",
                        "brief",
                        "bring",
                        "broad",
                        "broke",
                        "brown",
                        "build",
                        "built",
                        "buyer",
                        "cable",
                        "calif",
                        "carry",
                        "catch",
                        "cause",
                        "chain",
                        "chair",
                        "chart",
                        "chase",
                        "cheap",
                        "check",
                        "chest",
                        "chief",
                        "child",
                        "china",
                        "chose",
                        "civil",
                        "claim",
                        "class",
                        "clean",
                        "clear",
                        "click",
                        "clock",
                        "close",
                        "coach",
                        "coast",
                        "could",
                        "count",
                        "court",
                        "cover",
                        "craft",
                        "crash",
                        "cream",
                        "crime",
                        "cross",
                        "crowd",
                        "crown",
                        "curve",
                        "cycle",
                        "daily",
                        "dance",
                        "dated",
                        "dealt",
                        "death",
                        "debut",
                        "delay",
                        "depth",
                        "doing",
                        "doubt",
                        "dozen",
                        "draft",
                        "drama",
                        "drawn",
                        "dream",
                        "dress",
                        "drill",
                        "drink",
                        "drive",
                        "drove",
                        "dying",
                        "eager",
                        "early",
                        "earth",
                        "eight",
                        "elite",
                        "empty",
                        "enemy",
                        "enjoy",
                        "enter",
                        "entry",
                        "equal",
                        "error",
                        "event",
                        "every",
                        "exact",
                        "exist",
                        "extra",
                        "faith",
                        "false",
                        "fault",
                        "fiber",
                        "field",
                        "fifth",
                        "fifty",
                        "fight",
                        "final",
                        "first",
                        "fixed",
                        "flash",
                        "fleet",
                        "floor",
                        "fluid",
                        "focus",
                        "force",
                        "forth",
                        "forty",
                        "forum",
                        "found",
                        "frame",
                        "frank",
                        "fraud",
                        "fresh",
                        "front",
                        "fruit",
                        "fully",
                        "funny",
                        "giant",
                        "given",
                        "glass",
                        "globe",
                        "going",
                        "grace",
                        "grade",
                        "grand",
                        "grant",
                        "grass",
                        "great",
                        "green",
                        "gross",
                        "group",
                        "grown",
                        "guard",
                        "guess",
                        "guest",
                        "guide",
                        "happy",
                        "harry",
                        "heart",
                        "heavy",
                        "hence",
                        "henry",
                        "horse",
                        "hotel",
                        "house",
                        "human",
                        "ideal",
                        "image",
                        "index",
                        "inner",
                        "input",
                        "issue",
                        "japan",
                        "jimmy",
                        "joint",
                        "jones",
                        "judge",
                        "known",
                        "label",
                        "large",
                        "laser",
                        "later",
                        "laugh",
                        "layer",
                        "learn",
                        "lease",
                        "least",
                        "leave",
                        "legal",
                        "level",
                        "lewis",
                        "light",
                        "limit",
                        "links",
                        "lives",
                        "local",
                        "logic",
                        "loose",
                        "lower",
                        "lucky",
                        "lunch",
                        "lying",
                        "magic",
                        "major",
                        "maker",
                        "march",
                        "maria",
                        "match",
                        "maybe",
                        "mayor",
                        "meant",
                        "media",
                        "metal",
                        "might",
                        "minor",
                        "minus",
                        "mixed",
                        "model",
                        "money",
                        "month",
                        "moral",
                        "motor",
                        "mount",
                        "mouse",
                        "mouth",
                        "movie",
                        "music",
                        "needs",
                        "never",
                        "newly",
                        "night",
                        "noise",
                        "north",
                        "noted",
                        "novel",
                        "nurse",
                        "occur",
                        "ocean",
                        "offer",
                        "often",
                        "order",
                        "other",
                        "ought",
                        "paint",
                        "panel",
                        "paper",
                        "party",
                        "peace",
                        "peter",
                        "phase",
                        "phone",
                        "photo",
                        "piece",
                        "pilot",
                        "pitch",
                        "place",
                        "plain",
                        "plane",
                        "plant",
                        "plate",
                        "point",
                        "pound",
                        "power",
                        "press",
                        "price",
                        "pride",
                        "prime",
                        "print",
                        "prior",
                        "prize",
                        "proof",
                        "proud",
                        "prove",
                        "queen",
                        "quick",
                        "quiet",
                        "quite",
                        "radio",
                        "raise",
                        "range",
                        "rapid",
                        "ratio",
                        "reach",
                        "ready",
                        "refer",
                        "right",
                        "rival",
                        "river",
                        "robin",
                        "roger",
                        "roman",
                        "rough",
                        "round",
                        "route",
                        "royal",
                        "rural",
                        "scale",
                        "scene",
                        "scope",
                        "score",
                        "sense",
                        "serve",
                        "seven",
                        "shall",
                        "shape",
                        "share",
                        "sharp",
                        "sheet",
                        "shelf",
                        "shell",
                        "shift",
                        "shirt",
                        "shock",
                        "shoot",
                        "short",
                        "shown",
                        "sight",
                        "since",
                        "sixth",
                        "sixty",
                        "sized",
                        "skill",
                        "sleep",
                        "slide",
                        "small",
                        "smart",
                        "smile",
                        "smith",
                        "smoke",
                        "solid",
                        "solve",
                        "sorry",
                        "sound",
                        "south",
                        "space",
                        "spare",
                        "speak",
                        "speed",
                        "spend",
                        "spent",
                        "split",
                        "spoke",
                        "sport",
                        "staff",
                        "stage",
                        "stake",
                        "stand",
                        "start",
                        "state",
                        "steam",
                        "steel",
                        "stick",
                        "still",
                        "stock",
                        "stone",
                        "stood",
                        "store",
                        "storm",
                        "story",
                        "strip",
                        "stuck",
                        "study",
                        "stuff",
                        "style",
                        "sugar",
                        "suite",
                        "super",
                        "sweet",
                        "table",
                        "taken",
                        "taste",
                        "taxes",
                        "teach",
                        "teeth",
                        "terry",
                        "texas",
                        "thank",
                        "theft",
                        "their",
                        "theme",
                        "there",
                        "these",
                        "thick",
                        "thing",
                        "think",
                        "third",
                        "those",
                        "three",
                        "threw",
                        "throw",
                        "tight",
                        "times",
                        "tired",
                        "title",
                        "today",
                        "topic",
                        "total",
                        "touch",
                        "tough",
                        "tower",
                        "track",
                        "trade",
                        "train",
                        "treat",
                        "trend",
                        "trial",
                        "tried",
                        "tries",
                        "truck",
                        "truly",
                        "trust",
                        "truth",
                        "twice",
                        "under",
                        "undue",
                        "union",
                        "unity",
                        "until",
                        "upper",
                        "upset",
                        "urban",
                        "usage",
                        "usual",
                        "valid",
                        "value",
                        "video",
                        "virus",
                        "visit",
                        "vital",
                        "voice",
                        "waste",
                        "watch",
                        "water",
                        "wheel",
                        "where",
                        "which",
                        "while",
                        "white",
                        "whole",
                        "whose",
                        "woman",
                        "women",
                        "world",
                        "worry",
                        "worse",
                        "worst",
                        "worth",
                        "would",
                        "wound",
                        "write",
                        "wrong",
                        "wrote",
                        "yield",
                        "young",
                        "youth"];

    const targetWords = [];
    let guessGrid;

    useEffect(() => {
        guessGrid = document.querySelector("[data-guess-grid]");
    }, [guessGrid])

    function startInteraction(){
        $(document).on("click", handleMouseClick);
        document.addEventListener('keydown', handleKeyPress);
    }

    function stopInteraction(){
        $(document).off("click", handleMouseClick);
        $(document).off("keydown", handleKeyPress);
    }

    function handleMouseClick(e){
        if(e.target.matches("[data-key]")){
            pressKey(e.target.dataset.key);
            return;
        }
        if(e.target.matches("data-enter")){
            submitGuess();
            return;
        }
        if(e.target.matches("[data-delete]")){
            deleteKey();
            return;
        }
    }

    function handleKeyPress(e){
        e.preventDefault();
        e.stopPropagation();
        if(e.key === "Enter"){
            submitGuess();
            return;
        }
        if(e.key === "Backspace" || e.key === "Delete"){
            deleteKey();
            return;
        }
        if(e.key.match(/^[a-z]$/)){
            pressKey(e.key);
        }
    }

    function pressKey(key){
        const nextTile = guessGrid.querySelector(":not([data-letter])");
        nextTile.dataset.letter = key.toLowerCase();
        nextTile.textContent = key;
        nextTile.dataset.state = "active";
    }
    
    function deleteKey(){

    }

    function submitGuess(){

    }

    startInteraction();
  return <main className='page'>
            <div className="wordle-page-body">
                <div className="wordle-board">
                   <div className="guess-grid" data-guess-grid>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                    <div className="wordle-tile"></div>
                   </div>
                </div>
                <div className="keyboard">
                    <button className="key" date-key="Q">Q</button>
                    <button className="key" date-key="W">W</button>
                    <button className="key" date-key="E">E</button>
                    <button className="key" date-key="R">R</button>
                    <button className="key" date-key="T">T</button>
                    <button className="key" date-key="Y">Y</button>
                    <button className="key" date-key="U">U</button>
                    <button className="key" date-key="I">I</button>
                    <button className="key" date-key="O">O</button>
                    <button className="key" date-key="P">P</button>
                    <div className="space"/>
                    <button className="key" date-key="A">A</button>
                    <button className="key" date-key="S">S</button>
                    <button className="key" date-key="D">D</button>
                    <button className="key" date-key="F">F</button>
                    <button className="key" date-key="G">G</button>
                    <button className="key" date-key="H">H</button>
                    <button className="key" date-key="J">J</button>
                    <button className="key" date-key="K">K</button>
                    <button className="key" date-key="K">L</button>
                    <div className="space"/>
                    <button data-enter className="key large">Enter</button>
                    <button className="key" date-key="Z">Z</button>
                    <button className="key" date-key="X">X</button>
                    <button className="key" date-key="C">C</button>
                    <button className="key" date-key="V">V</button>
                    <button className="key" date-key="B">B</button>
                    <button className="key" date-key="N">N</button>
                    <button className="key" date-key="M">M</button>
                    <button data-delete className="key large"><BackspaceTwoTone fontSize='x-small'/></button>
                </div>
            </div>
        </main>;
}
