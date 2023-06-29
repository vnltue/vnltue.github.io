var danhNgon = [
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - <em>Albert Schweitzer</em>",
    "Happiness is not the goal, but a byproduct of investing wisely in ourselves and others. - <em>Ben Carson</em>",
    "The true value of life is not just the successes we achieve, but also the values we bring into the lives of others. - <em>Albert Einstein</em>",
    "Success is not about what you do once, but about what you do every day. - <em>Unknown</em>",
    "Don't fear failure. Fear being in the exact same place next year as you are today. - <em>Michael Jordan</em>",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - <em>Ralph Waldo Emerson</em>",
    "Success does not come to those who wait, wish, or sit and hope. Success comes to those who decide. - <em>Unknown</em>",
    "The future belongs to those who believe in the beauty of their dreams. - <em>Eleanor Roosevelt</em>",
    "Being a male is a matter of birth, being a man is a matter of choice. - <em>Unknown</em>",
    "A man's worth is not defined by his job or possessions, but by the love, respect, and kindness he gives to others. - <em>Unknown</em>",
    "The measure of a man is not how much he has, but how much he gives. - <em>Unknown</em>",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - <em>Ralph Waldo Emerson</em>"
  ];
var danhNgonDaHienThi = [];

  function getRandomQuote() {
    var danhNgonElements = document.getElementsByClassName("danh-ngon");
    for (var i = 0; i < danhNgonElements.length; i++) {
      var randomIndex;
      var randomQuote;
      do {
        randomIndex = Math.floor(Math.random() * danhNgon.length);
        randomQuote = danhNgon[randomIndex];
      } while (danhNgonDaHienThi.includes(randomQuote));
      
      danhNgonDaHienThi.push(randomQuote);
      danhNgonElements[i].innerHTML = randomQuote;
    }
  }

  var danhNgonContainers = document.getElementsByClassName("danh-ngon-container");
  for (var j = 0; j < danhNgonContainers.length; j++) {
    var container = danhNgonContainers[j];
    var danhNgonElement = container.getElementsByClassName("danh-ngon")[0];
    var customId = danhNgonElement.getAttribute("id");
    danhNgonElement.classList.add("danh-ngon");
    danhNgonElement.setAttribute("id", customId);
  }

  getRandomQuote();
