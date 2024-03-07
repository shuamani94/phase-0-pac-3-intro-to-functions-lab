
  function shout(string) {
    return string.toUpperCase();
  }
  
  function whisper(string) {
    return string.toLowerCase();
  }

  function logShout(string) {
    console.log(string.toUpperCase());
  }
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  function sayHiToHeadphonedRoommate(string) {
    console.log(string.toLowerCase());
    
    if (string === string.toUpperCase()) {
        console.log("YES INDEED!");
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
    
    return "I can't hear you!";
}

it('returns "I would love to!" if `string` is "Let\'s have dinner together!"', function() {
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual("I would love to!");
});