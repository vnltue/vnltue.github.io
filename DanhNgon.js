  var danhNgon = [
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - <em>Albert Schweitzer</em>",
    "Love is not about how much you say 'I love you,' but how much you prove that it's true.",
    "Life is like a book. Every day is a new page. Make sure to write a good story.",
    "A true friend is someone who accepts you for who you are, but also inspires you to become the best version of yourself.",
    "Education is not just about acquiring knowledge; it's about developing critical thinking skills and a thirst for lifelong learning.",
    "Success is not measured by the wealth and possessions we accumulate, but by the positive impact we have on others and the world around us.",
    "In business, it's not just about making profits; it's about creating value and making a difference in the lives of customers and communities." ,
    "Love is not about finding the perfect person, but about accepting someone's imperfections and choosing to love them unconditionally.",
    "Happiness is not a destination, but a state of mind. It's about finding joy in the little things and being grateful for what we have.",
    "The key to a successful career is to pursue your passion, work hard, and never stop learning and growing.",
    "Family is a source of unconditional love and support. They are the ones who stand by you through thick and thin, and they are the ones who truly know you.",
    "The best way to predict the future is to create it. Don't wait for opportunities, but seize them and make things happen.",
    "Education is not confined to the four walls of a classroom. It's a lifelong process of learning, exploring, and seeking knowledge in every aspect of life.",
    "Kindness costs nothing, but it can have a tremendous impact. Spread kindness wherever you go, and watch how it transforms the world around you.",
    "Success is not overnight. It's a result of hard work, dedication, and perseverance. Keep going, and you will achieve your goals.",
    "Family is the anchor that keeps us grounded, the support that lifts us up, and the love that sustains us through life's ups and downs.",
    "Love is not about finding the perfect person, but about accepting and cherishing the imperfections of the ones we love.",
    "Beauty is not defined by society's standards, but by the uniqueness and confidence you carry within yourself.",
    "Life is too short to hold grudges. Forgive, let go, and make room for happiness and peace in your heart.",
    "Success is not measured by material wealth, but by the positive impact you have on others and the happiness you feel within.",
    "Dream big, for dreams have the power to shape our reality. Set goals, work hard, and never lose sight of the vision that fuels your passion.",
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