


function slugifyName(name) {
  return name
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/ /g, "_") + ".png";
}



let selectedQuizMode = 5; // default





const questionSets = {
  virtues: [
    // =======================
    // VIRTUES (Challenge + Growth)
    // =======================

    {
      text: "Which one of the following situations challenges you the most?",
      answers: [
        { text: "Deliberating upon and making a major decision", tags: ["Wisdom", "Discernment"] },
        { text: "Living a chaste life with a purity of heart", tags: ["Chastity", "Purity"] },
        { text: "Being charitable to those with whom I disagree", tags: ["Ecumenism", "Dialogue"] },
        { text: "Persevering in a non-ideal but essential situation", tags: ["Perseverance", "Courage"] }
      ]
    },
    {
      text: "In which of these aspects of your faith do you wish to grow the most?",
      answers: [
        { text: "To establish and maintain a strong prayer life", tags: ["Spiritual depth", "Devotion"] },
        { text: "Being knowledgeable and sharing the beauty of the Catholic faith", tags: ["Catechesis", "Missionary zeal"] },
        { text: "Standing my ground when being challenged in my faith", tags: ["Ecumenism", "Resilience"] },
        { text: "Having a heart for the poor and marginalized in society", tags: ["Social justice", "Marginalized"] }
      ]
    },
    {
      text: "From which of these personal challenges would you like to seek growth?",
      answers: [
        { text: "Not knowing God’s love for me on a personal level", tags: ["Devotion"] },
        { text: "Admitting that I am wrong", tags: ["Humility"] },
        { text: "Accepting failure and letting it go", tags: ["Interior freedom", "Courage"] },
        { text: "Feeling stressed out by many responsibilities", tags: ["Perseverance"] }
      ]
    },

    // (Challenge: Evangelization)
    {
      text: "Which of these ways of evangelization challenges you the most?",
      answers: [
        { text: "Learning a culture patiently and finding God already present within it", tags: ["Patience", "Inculturation"] },
        { text: "Living without a stable home base and constantly being sent elsewhere", tags: ["Missionary"] },
        { text: "Understanding and confronting the systemic roots of social sin", tags: ["Social justice", "Marginalized"] },
        { text: "Sowing seeds without knowing if or when they will bear fruit", tags: ["Interior freedom", "Perseverance"] }
      ]
    },
    // (Growth: Evangelization)
    {
      text: "In which of these ways of evangelization do you most wish to grow?",
      answers: [
        { text: "Teaching the Catholic faith clearly and articulately", tags: ["Catechesis", "Intellectual rigor"] },
        { text: "Walking patiently with those in greatest need of mercy", tags: ["Spiritual accompaniment"] },
        { text: "Discerning God’s will in the concrete situations of life", tags: ["Wisdom", "Discernment"] },
        { text: "Advocating for the marginalized and voiceless", tags: ["Social justice"] }
      ]
    },

    // Scenarios (Growth)
    {
      text: "When discerning a new ministry role, what would be hardest for you?",
      answers: [
        { text: "Figuring out God’s will in this situation", tags: ["Wisdom"] },
        { text: "Accepting that I do not have control over everything", tags: ["Humility"] },
        { text: "Saying yes to an unknown that feels uncomfortable", tags: ["Courage"] },
        { text: "Letting go of a role I love for the sake of others", tags: ["Interior freedom", "Sacrifice"] }
      ]
    },
    {
      text: "Imagine you are visiting the sick or homebound. What would challenge you most?",
      answers: [
        { text: "Finding the right words to bring comfort", tags: ["Wisdom"] },
        { text: "Being fully present despite discomfort or revulsion", tags: ["Courage"] },
        { text: "Accepting the limits of what I can do", tags: ["Humility", "Interior freedom"] },
        { text: "Returning regularly even when it is inconvenient", tags: ["Perseverance"] }
      ]
    },
    {
      text: "If you were serving in a ministry for the poor, what would stretch you most?",
      answers: [
        { text: "Giving generously of time when I feel exhausted", tags: ["Magnanimity"] },
        { text: "Advocating for the ministry and seeking resources to sustain it", tags: ["Leadership"] },
        { text: "Understanding the roots of poverty and empathizing deeply", tags: ["Intellectual rigor", "Marginalized"] },
        { text: "Continuing even when results seem minimal", tags: ["Perseverance", "Courage"] }
      ]
    },
    {
      text: "Imagine yourself working in a Catholic school. Which situation would challenge you most?",
      answers: [
        { text: "Remaining faithful to the duty of the moment amid interruptions", tags: ["Holiness in ordinary life"] },
        { text: "Remaining charitable to a disrespectful student", tags: ["Perseverance"] },
        { text: "Enduring stressful meetings with patience", tags: ["Resilience"] },
        { text: "Aligning every decision with the school’s mission", tags: ["Leadership", "Fidelity"] }
      ]
    },
    {
      text: "If you were asked to lead a discussion on Catholic social teaching, what would be hardest?",
      answers: [
        { text: "Explaining complex ideas simply", tags: ["Educator", "Intellectual rigor"] },
        { text: "Encouraging respectful dialogue among differing views", tags: ["Dialogue"] },
        { text: "Leading confidently when discussion becomes heated", tags: ["Leadership", "Courage"] },
        { text: "Admitting when I need to learn more", tags: ["Humility"] }
      ]
    }
  ],

  service: [
    // =======================
    // SERVICE
    // =======================

    {
      text: "Where do you most desire to serve the Lord and his people?",
      answers: [
        { text: "Classrooms as a teacher or catechist", tags: ["Catechesis", "Intellectual rigor"] },
        { text: "Homeless shelters and prisons", tags: ["Marginalized", "Social justice"] },
        { text: "Planning and leading evangelization initiatives", tags: ["Leadership", "Visionary"] },
        { text: "One-on-one spiritual accompaniment", tags: ["Wisdom", "Spiritual accompaniment"] }
      ]
    },
    {
      text: "Which group of people do you most long to accompany?",
      answers: [
        { text: "Family and friends who do not yet know God personally", tags: ["Evangelisation of one’s own", "Apostolic zeal"] },
        { text: "People from cultures that have not encountered Christ", tags: ["Missionary", "Inculturation"] },
        { text: "The abandoned and downtrodden", tags: ["Marginalized"] },
        { text: "Spiritual seekers in a post-Christian world", tags: ["Dialogue", "Wisdom"] }
      ]
    },
    {
      text: "Which form of peacemaking attracts you most?",
      answers: [
        { text: "Cultivating interior peace of heart", tags: ["Devotion"] },
        { text: "Dialogue to find common ground", tags: ["Ecumenism"] },
        { text: "Working together for the common good", tags: ["Leadership"] },
        { text: "Self-sacrifice for the sake of others", tags: ["Sacrifice", "Martyrdom"] }
      ]
    },

    // Added from your doc (Service: Action)
    {
      text: "Which of these ways of communicating the Catholic faith attracts you the most?",
      answers: [
        { text: "Through my action in serving the poor and needy", tags: ["Social justice"] },
        { text: "Teaching", tags: ["Educator", "Catechesis"] },
        { text: "Bearing witness to the faith in the face of hostility", tags: ["Courage", "Missionary"] },
        { text: "Embracing and transforming the culture in which we live", tags: ["Inculturation"] }
      ]
    },

    // Added from your doc (Service: Missionary)
    {
      text: "When it comes to evangelization, into which type of mission territory do you find the most attracted to enter?",
      answers: [
        { text: "Established cultures in the East", tags: ["Inculturation", "Intellectual rigor"] },
        { text: "Indigenous cultures around the world", tags: ["Inculturation", "Indigenous"] },
        { text: "The post-Christian culture in Europe", tags: ["Dialogue"] },
        { text: "Evangelizing the baptized in my own backyard", tags: ["Locale", "Apostolic zeal"] }
      ]
    },

    // Added from your doc (Service: Ways of serving)
    {
      text: "By which of these ways of evangelization do you feel the most challenged?",
      answers: [
        { text: "Having a boundless zeal to make the Good News of Jesus Christ known", tags: ["Apostolic zeal"] },
        { text: "Growing in compassion and strength to serve the poor and marginalized", tags: ["Marginalized", "Courage"] },
        { text: "Engaging in the slow work of sowing and cultivating in educating the youth", tags: ["Perseverance", "Educator"] },
        { text: "Tuning my spiritual compass in growing in sensitivity to discern God’s will", tags: ["Spiritual accompaniment", "Wisdom"] }
      ]
    }
  ],

  spiritualDepth: [
    // =======================
    // SPIRITUAL DEPTH
    // =======================

    {
      text: "Which way of seeking spiritual depth do you desire most?",
      answers: [
        { text: "Understanding the faith deeply in order to communicate it well", tags: ["Intellectual rigor", "Educator"] },
        { text: "Learning the movements of the heart to help others follow God", tags: ["Wisdom", "Spiritual accompaniment"] },
        { text: "Understanding society to evangelize creatively", tags: ["Missionary", "Inculturation"] },
        { text: "Embracing hardship for the sake of Christian witness", tags: ["Courage", "Sacrifice"] }
      ]
    },
    {
      text: "Which spirituality are you most drawn toward?",
      answers: [
        { text: "Finding and serving Christ in the poor", tags: ["Social justice", "Marginalized"] },
        { text: "Having my heart formed after the Heart of Jesus", tags: ["Devotion"] },
        { text: "Finding God in the ordinary and mundane", tags: ["Holiness in ordinary life"] },
        { text: "Being fully available to be sent where needs are greatest", tags: ["Missionary", "Interior freedom"] }
      ]
    }
  ]
};

function pickNShuffled(arr, n) {
  const copy = shuffleArray([...arr]);
  return copy.slice(0, Math.min(n, copy.length));
}

function buildQuizQuestionsByMode(mode) {
  // mode: 5 or 10
  const plan = (mode === 10)
    ? { virtues: 4, service: 4, spiritualDepth: 2 }
    : { virtues: 2, service: 2, spiritualDepth: 1 }; // default = 5

  const v = pickNShuffled(questionSets.virtues, plan.virtues).map(q => ({ ...q, category: "virtues" }));
  const s = pickNShuffled(questionSets.service, plan.service).map(q => ({ ...q, category: "service" }));
  const d = pickNShuffled(questionSets.spiritualDepth, plan.spiritualDepth).map(q => ({ ...q, category: "spiritualDepth" }));

  return [...v, ...s, ...d];
}


function shuffleArray(arr) {
  // Fisher–Yates shuffle (unbiased)
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}



// Default (if user hasn't chosen yet)
let shuffledQuestions = buildQuizQuestionsByMode(5);



const saintProfiles = {
  "Ignatius of Loyola": [
    "Leadership",
    "Wisdom",
    "Zeal",
    "Interior Freedom",
    "Magnanimity"
  ],
  "Francis Xavier": [
    "Leadership",
    "Inculturation",
    "Perseverance",
    "Interior Freedom",
    "Zeal"
  ],
  "Peter Faber": [
    "Accompaniment",
    "Wisdom",
    "Ecumenism",
    "Spiritual Life"
  ],
  "Paul Miki": [
    "Sacrifice",
    "Asia",
    "Courage",
    "Perserverance",
    "Locale"
  ],
  "Claude La Colombiere": [
    "Devotion",
    "Accompaniment",
    "Wisdom",
    "Spiritual Life"
  ],
  "Peter Canisius": [
    "Catechesis",
    "Intellectual Rigor",
    "Educator",
    "Ecumenism",
    "Europe"
  ],
  "Jose Maria Rubio": [
    "Europe",
    "Locale",
    "Zeal",
    "Leadership",
    "Marginalized"
  ],
  "Jose de Anchieta": [
    "Zeal",
    "Inculturation",
    "Catechesis",
    "Educator",
    "Leadership",
    "Indigenous"
  ],
  "John Francis Regis": [
    "Locale",
    "Europe",
    "Zeal",
    "Marginalized",
    "Perserverence"
  ],
  "Aloysius Gonzaga": [
    "Purity",
    "Courage",
    "Magnanimity",
    "Interior Freedom"
  ],
  "Alberto Hurtado": [
    "Leadership",
    "Marginalized",
    "Intellectual Rigor",
    "Zeal",
    "Locale"
  ],
  "Peter Claver": [
    "Humility",
    "Marginalized",
    "Zeal",
    "Catechesis",
    "Perserverence"
  ],
  "Robert Bellarmine": [
    "Leadership",
    "Intellectual Rigor",
    "Catechesis",
    "Accompaniment",
    "Dialogue"
  ],
  "Francis Borgia": [
    "Humility",
    "Leadership",
    "Interior Freedom",
    "Zeal"
  ],
  "Isaac Jogues": [
    "Sacrifice",
    "Courage",
    "Indigenous",
    "Resilience",
    "Interior Freedom"
  ],
  "Jean de Brebeuf": [
    "Sacrifice",
    "Inculturation",
    "Catechesis",
    "Indigenous",
    "Leadership",
    "Courage"
  ],
  "Noel Chabanel": [
    "Sacrifice",
    "Indigenous",
    "Perseverance",
    "Humility",
    "Interior Freedom"
  ],
  "Alphonsus Rodriguez": [
    "Humility",
    "Accompaniment",
    "Daily Life"
  ],
  "Stanislaus Kostka": [
    "Resilience",
    "Courage",
    "Purity",
    "Devotion"
  ],
  "Joseph Pignatelli": [
    "Leadership",
    "Perserverance",
    "Humility",
    "Courage",
    "Marginalized"
  ],
  "Edmund Campion": [
    "Intellectual Rigor",
    "Catechesis",
    "Courage",
    "Sacrifice",
    "Perseverance"
  ]
};
const saintTexts = {
  "Ignatius of Loyola": {
    "quote":  "Act as if everything depended on you; trust as if everything depended on God",
    "prayer": "Heavenly Father, you have given us St. Ignatius as our spiritual father. Through his intercession, grant us his audacity and wisdom so that our lives give you greater glory. We ask this through Christ, our Lord. Amen."
  },
   "Alberto Hurtado": {
    "quote":  "Christ stumbles through our streets,",
    "prayer": "Heavenly Father, St. Alberto Hurtado shared your Good News through intellectual and practical means. Through his intercession, grant us an evangelical zeal that helps us to mirror his balanced approach. We ask this through Christ, our Lord. Amen."
  },
  "Francis Xavier": {
    "prayer": "Heavenly Father, St. Francis Xavier made your love known with great missionary zeal. Through his intercession, grant us the same inner fire so that we may bring your Good News to the four corners of the world. We ask this through Christ, our Lord. Amen."
  },
  "Peter Faber": {
    "prayer": "Heavenly Father, you have blessed St. Peter Faber as a master of giving the Spiritual Exercises. Through his intercession, grant us the spiritual wisdom to know the ways in which you tuck our heartstrings. We ask this through Christ, our Lord. Amen."
  },
  "Paul Miki": {
    "quote": "Like my Master, I shall die upon the cross. Like him, a lance will pierce my heart so that my blood and my love can flow out upon the land and sanctify it to his name.",
    "prayer": "Heavenly Father, St. Paul Miki shed his blood out of love for you and for his brethren in Japan. Through his intercession, grant us the same steadfast love, so that our lives give credible witness to you. We ask this through Christ, our Lord. Amen. "
  },
  "Claude La Colombiere": {
    "quote": "I am resolved in the future to live free from every care and to turn all my anxieties over to you.",
    "prayer": "Heavenly Father, St. Claude La Colombiere sought to make your love known through propagating the devotion of the Sacred Heart. Through his intercession, mould our hearts that they resemble that of your Son, so that our lives become channels of your love. We ask this through Christ, our Lord. Amen."
  },
  "Peter Canisius": {
    "quote": "Charity is that with which no man is lost, and without which no man is saved.",
    "prayer": "Heavenly Father, you have given St. Peter Canisius a burning zeal to catechize the people of Germany. Through his intercession, grant us the zeal to teach the faith, so that others may better know, love and follow you. We ask this through Christ, our Lord. Amen."
  },
  "Jose Maria Rubio": {
    "quote": "Do what God wants, and want what God does",
    "prayer":"Heavenly Father, you have made St. José Mario Rubio a tireless apostle in the city of Madrid. Through his intercession, grant us the strength we need so that we may take that extra step to serve our neighbors. We ask this through Christ, our Lord. Amen."
  },
  "Jose de Anchieta": {
    "quote": "May death at least find me abandoned in one of these mountains and there to die for my brothers.",
    "prayer": "Heavenly Father, St. José de Anchieta spared no effort in making your love known in Brazil. Through his intercession, grant us the audacity to be creative in bringing our neighbors to you. We ask this through Christ, our Lord. Amen."
  },
  "John Francis Regis": {
    "quote": "Come, I carry you all in my heart.",
    "prayer": "Heavenly Father, Saint John Francis Regis tirelessly served your people in hundreds of French villages; through his intercession, give us the same heart to serve in the neglected villages of our day. We ask this through Christ, our Lord. Amen."
  },
  "Aloysius Gonzaga": {
    "quote": "Jesus, Jesus, Jesus, be to me Jesus.",
    "prayer": "Heavenly Father, St. Aloysius Gonzaga gave his life while serving the infirmed during a plague. Through his intercession, help us to devote our lives to those who are most in need of your mercy. We ask this through Christ, our Lord. Amen."
  },
  "Peter Claver": {
    "quote": "Slave of the black slaves for all time.",
    "prayer": "Heavenly Father, St. Peter Claver made himself a slave of slaves to serve the marginalized in his day; through his intercession, grant us the desire to love and serve in the same manner. We ask this through Christ, our Lord. Amen."
  },
  "Robert Bellarmine": {
    "quote": "Charity is that with which no man is lost, and without which no man is saved",
    "prayer": "Heavenly Father, you have given St. Robert Bellarmine a great intellect to understand and communicate your truth. Through his intercession, help us to better know you so that we may better lead others to you. We ask this through Christ, our Lord. Amen."
  },
  "Francis Borgia": {
    "quote": "Never again will I serve a lord who can die.",
    "prayer": "Heavenly Father, St. Francis Borgia left behind honor and riches to follow and serve your Son; through his intercession, help us to strive for the same interior freedom so to better let go of things and cling onto you. We ask this through Christ, our Lord. Amen."
  },
  "Isaac Jogues": {
    "prayer": "Heavenly Father, St. Isaac Jogues chose to return to his mission with full knowledge of the pending suffering and death. Through his intercession, grant us the same docile strength so that we may better embrace our Cross. We ask this through Christ, our Lord. Amen."
  },
  "Jean de Brebeuf": {
    "prayer": "Heavenly Father, St. Jean de Brébeuf considers Jesus and his Cross as the true greatness of our lives; through his intercession, grant us a heart to seek Christ and his Cross more, so that we be able to find sweetness in bitterness, roses in the thorns, and all in nothing. We ask this through Christ, our Lord. Amen."
  },
  "Noel Chabanel": {
    "quote": "I vow to remain among the Hurons even unto death, submitting myself to the will of God and my superiors.",
    "prayer": "Heavenly Father, St. Noel Chabanel remained steadfast in his mission even amidst seeming failures. Through his intercession, help us to remain faithful out of love for you and for those whom you have entrusted to us. We ask this through Christ, our Lord. Amen."
  },
  "Alphonsus Rodriguez": {
    "prayer": "Heavenly Father, St. Alphonsus Rodriguez humbly served you in small and menial tasks; through his intercession, grant us the grace to search and find you in the small things of our lives. We ask this through Christ, our Lord. Amen."
  },
  "Stanislaus Kostka": {
    "prayer": "Heavenly Father, you have given St. Stanislaus Kostka great determination in following you. Through his intercession, help us to grow in our resolve so that we may persevere in our desire to love and follow you. We asked this through Christ, our Lord. Amen."
  },
  "Joseph Pignatelli": {
    "prayer": "Heavenly Father, St. Joseph Pignatelli faithfully loved and served his brother Jesuits in times of great turmoil; through his intercession, grant us the same persevering love for our brothers and sisters. We ask this through Christ, our Lord. Amen."
  },
  "Edmund Campion": {
    "quote": "The expense is reckoned, the enterprise is begun; it is of God, it cannot be withstood.",
    "prayer": "Heavenly Father, you have given St. Edmund Campion an eloquence to preach the Kingdom of God amidst great trials and tribulations. Through his intercession, give us the same courage so that we may fearlessly give witness to you. We ask this through Christ, our Lord. Amen."
  }
};
const saintUrls = {
  "Ignatius of Loyola": { url: "https://www.jesuits.global/saint-blessed/saint-ignatius-of-loyola/" },
  "Francis Xavier": { url: "https://www.jesuits.global/saint-blessed/saint-francis-xavier/" },
  "Peter Faber": { url: "https://www.jesuits.global/saint-blessed/saint-peter-faber/" },
  "John Berchmans": { url: "https://www.jesuits.global/saint-blessed/saint-john-berchmans/" },
  "Paul Miki": { url: "https://www.jesuits.global/saint-blessed/saint-paul-miki" },
  "John Soan de Goto": { url: "https://www.jesuits.global/saint-blessed/saint-john-de-goto/" },
  "James Kisai": { url: "https://www.jesuits.global/saint-blessed/saint-james-kisai" },
  "Claude La Colombiere": { url: "https://www.jesuits.global/saint-blessed/saint-claude-la-colombiere" },
  "Peter Canisius": { url: "https://www.jesuits.global/saint-blessed/saint-peter-canisius/" },
  "Jose Maria Rubio": { url: "https://www.jesuits.global/saint-blessed/saint-jose-maria-rubio" },
  "Jose de Anchieta": { url: "https://www.jesuits.global/saint-blessed/saint-jose-de-anchieta/" },
  "John Francis Regis": { url: "https://www.jesuits.global/saint-blessed/saint-john-francis-regis" },
  "Aloysius Gonzaga": { url: "https://www.jesuits.global/saint-blessed/saint-aloysius-gonzaga" },
  "Alberto Hurtado": { url: "https://www.jesuits.global/saint-blessed/saint-alberto-hurtado" },
  "Peter Claver": { url: "https://www.jesuits.global/saint-blessed/saint-peter-claver/" },
  "Robert Bellarmine": { url: "https://www.jesuits.global/saint-blessed/saint-robert-bellarmine/" },
  "Francis Borgia": { url: "https://www.jesuits.global/saint-blessed/saint-francis-borgia/" },
  "Isaac Jogues": { url: "https://www.jesuits.global/saint-blessed/saint-isaac-jogues" },
  "Jean de Brebeuf": { url: "https://www.jesuits.global/saint-blessed/saint-john-de-brebeuf/" },
  "Gabriel Lalemant": { url: "https://www.jesuits.global/saint-blessed/saint-gabriel-lalemant" },
  "Antoine Daniel": { url: "https://www.jesuits.global/saint-blessed/saint-antoine-daniel" },
  "Noel Chabanel": { url: "https://www.jesuits.global/saint-blessed/saint-noel-chabanel/" },
  "Charles Garnier": { url: "https://www.jesuits.global/saint-blessed/saint-charles-garnier" },
  "Rene Goupil": { url: "https://www.jesuits.global/saint-blessed/saint-rene-goupil" },
  "John de la Lande": { url: "https://www.jesuits.global/saint-blessed/saint-john-de-la-lande" },
  "Alphonsus Rodriguez": { url: "https://www.jesuits.global/saint-blessed/saint-alphonsus-rodriguez" },
  "Stanislaus Kostka": { url: "https://www.jesuits.global/saint-blessed/saint-stanislaus-kostka/" },
  "Joseph Pignatelli": { url: "https://www.jesuits.global/saint-blessed/saint-joseph-pignatelli/" },
  "Edmund Campion": { url: "https://www.jesuits.global/saint-blessed/saint-edmund-campion/" }
};

Object.keys(saintUrls).forEach(name => {
  saintTexts[name] = { ...(saintTexts[name] || {}), ...saintUrls[name] };
});

let currentQuestionIndex = 0;
let tagScores = {};

function getSaintUrl(name) {
  try { return (saintTexts && saintTexts[name] && saintTexts[name].url) ? saintTexts[name].url : null; }
  catch(e){ return null; }
}

function imageFilenameFromName(name, basePath = "images") {
  const file = slugifyName(name);
  return basePath ? `${basePath.replace(/\/?$/, "/")}${file}` : file;
}

function updateProgressBar() {
  const fill = document.getElementById("progress-fill");
  if (!fill || !shuffledQuestions.length) return;
  const percent = Math.round((currentQuestionIndex / shuffledQuestions.length) * 100);
  fill.style.width = percent + "%";
}


function showQuestion() {
  const container = document.getElementById("question-container");
  if (!container) return;
  container.innerHTML = "";

if (currentQuestionIndex >= shuffledQuestions.length) {
  showResult();
  return;
}


  const q = shuffledQuestions[currentQuestionIndex];


  const h2 = document.createElement("h2");
  h2.textContent = q.text;
  container.appendChild(h2);

  const hint = document.createElement("p");
  hint.style.fontStyle = "italic";
  hint.style.marginBottom = "10px";
  hint.textContent = "Drag to sort from top (most like you) to bottom (least like you).";
  container.appendChild(hint);

  const list = document.createElement("ul");
  list.className = "rank-list"; 
  q.answers.forEach((ans, i) => {
    const li = document.createElement("li");
    li.className = "rank-item";
    li.draggable = true;
    li.dataset.answerIndex = String(i);

    const handle = document.createElement("span");
    handle.className = "rank-handle";
    handle.textContent = "⇅";

    const label = document.createElement("span");
    label.className = "rank-label";
    label.textContent = ans.text;

    li.appendChild(handle);
    li.appendChild(label);
    list.appendChild(li);
  });
  container.appendChild(list);

  enableDragSort(list);

  // Submit
  const submitBtn = document.createElement("button");
  submitBtn.type = "button";
  submitBtn.classList.add("answer-button");
  submitBtn.textContent = "Next Question";
  container.appendChild(submitBtn);

  submitBtn.addEventListener("click", () => {
    const items = Array.from(list.querySelectorAll(".rank-item"));
    if (items.length !== q.answers.length) return;

    // Scoring
    const N = items.length;
    items.forEach((li, position) => {
      const ans = q.answers[parseInt(li.dataset.answerIndex, 10)];
      const score = N - position;
      ans.tags.forEach(tag => {
        if (!tagScores[tag]) tagScores[tag] = 0;
        tagScores[tag] += score;
      });
    });

    currentQuestionIndex++;
updateProgressBar();
if (currentQuestionIndex < shuffledQuestions.length) {
  showQuestion();
} else {
  showResult();
}

  });
}

function enableDragSort(listEl) {
  // Use Pointer Events when available for smoother drag (touch + mouse)
  if (!window.PointerEvent) {
    // Fallback: original HTML5 drag & drop behavior
    let dragging = null;

    listEl.addEventListener("dragstart", (e) => {
      const li = e.target.closest(".rank-item");
      if (!li) return;
      dragging = li;
      li.classList.add("dragging");
      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", "");
      }
    });

    listEl.addEventListener("dragend", () => {
      if (dragging) dragging.classList.remove("dragging");
      dragging = null;
    });

    listEl.addEventListener("dragover", (e) => {
      e.preventDefault();
      const after = getDragAfterElement(listEl, e.clientY);
      const current = listEl.querySelector(".dragging");
      if (!current) return;
      if (after == null) {
        listEl.appendChild(current);
      } else {
        listEl.insertBefore(current, after);
      }
    });

    return;
  }

  let activeItem = null;

  const onPointerMove = (e) => {
    if (!activeItem) return;

    const after = getDragAfterElement(listEl, e.clientY);
    if (after == null) {
      listEl.appendChild(activeItem);
    } else if (after !== activeItem) {
      listEl.insertBefore(activeItem, after);
    }
  };

  const endDrag = () => {
    if (!activeItem) return;
    activeItem.classList.remove("dragging");
    activeItem = null;

    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", endDrag);
    window.removeEventListener("pointercancel", endDrag);
  };

  listEl.addEventListener("pointerdown", (e) => {
    const li = e.target.closest(".rank-item");
    if (!li || !listEl.contains(li)) return;

    // For mouse, only respond to primary button
    if (e.pointerType === "mouse" && e.button !== 0) return;

    activeItem = li;
    li.classList.add("dragging");

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);
  });

  // Disable native drag to avoid conflicts when Pointer Events are used
  const items = listEl.querySelectorAll(".rank-item");
  items.forEach((li) => {
    li.draggable = false;
    li.addEventListener("dragstart", (e) => e.preventDefault());
  });
}



function getDragAfterElement(container, y) {
  const els = [...container.querySelectorAll(".rank-item:not(.dragging)")];
  let closest = { offset: Number.NEGATIVE_INFINITY, element: null };
  for (const child of els) {
    const box = child.getBoundingClientRect();
    const offset = y - (box.top + box.height / 2);
    if (offset < 0 && offset > closest.offset) {
      closest = { offset, element: child };
    }
  }
  return closest.element;
}

function showResult() {
  const quizContainer = document.querySelector(".quiz-container");
  const resultContainer = document.getElementById("result-container");
  if (quizContainer) quizContainer.classList.add("hidden");
  if (resultContainer) resultContainer.classList.remove("hidden");

  // Score each saint by summing their tag points
  const saintScores = {};
  for (const [saint, tags] of Object.entries(saintProfiles)) {
    saintScores[saint] = tags.reduce((sum, tag) => sum + (tagScores[tag] || 0), 0);
  }
  const [topSaint] = Object.entries(saintScores).sort((a, b) => b[1] - a[1])[0] || [null];

  const nameEl = document.getElementById("saint-name");
  const imgEl  = document.getElementById("saint-image");
  const msgEl  = document.getElementById("saint-message");
  const tagsEl = document.getElementById("saint-tags");

  if (nameEl) nameEl.textContent = topSaint || "Results";

  if (imgEl && topSaint) {
    imgEl.src = imageFilenameFromName(topSaint, "images");
    imgEl.alt = topSaint;
    imgEl.onerror = function () {
      this.onerror = null;
      this.src = imageFilenameFromName(topSaint, "images").replace(".jpg", ".png");
    };
  }

  if (msgEl) {
    let html = "";
    const info = (saintTexts && saintTexts[topSaint]) ? saintTexts[topSaint] : null;
    if (info) {
      const quote = info.quote ? `“${info.quote}”` : "";
  const prayer = info.prayer
  ? `
    <div class="saint-prayer">
      <h4 class="prayer-title">Let us pray:</h4>
      <p>${info.prayer}</p>
    </div>
  `
  : "";


      html = [quote ? `<blockquote>${quote}</blockquote>` : "", prayer].filter(Boolean).join("");
    }
    if (!html && topSaint) html = `Interested in learning more about ${topSaint}?`;
    msgEl.innerHTML = html || "";
  }

 if (tagsEl) {
  tagsEl.innerHTML = "";
  const tags = saintProfiles[topSaint] || [];

  tags.forEach(tag => {
    const pill = document.createElement("span");
    pill.classList.add("tag-pill");
    pill.textContent = tag;
    pill.addEventListener("click", () => showRelatedByTag(tag, topSaint));
    tagsEl.appendChild(pill);
  });

  // ⭐ NEW: auto-show related saints for first tag
  if (tags.length > 0) {
    showRelatedByTag(tags[0], topSaint);
  }
}

  const progress = document.getElementById("progress-fill");
  if (progress) progress.style.width = "100%";




  }

// Related Saints (by tags)
function showRelatedByTag(tag, excludeSaint) {
  const rel = document.getElementById("related-saints");
  if (!rel) return;

  const matches = Object.keys(saintProfiles).filter(
    s => s !== excludeSaint && (saintProfiles[s] || []).includes(tag)
  );

  rel.innerHTML = `<div class="related-title">Others with "${tag}"</div>`;

  if (!matches.length) {
    rel.innerHTML += '<div class="related-hint">No other saints share this tag yet.</div>';
    return;
  }

  const grid = document.createElement("div");
  grid.className = "related-grid";

  matches.forEach(name => {
    const card = document.createElement("div");
    card.className = "related-card";

    const img = document.createElement("img");
    img.src = imageFilenameFromName(name, "images");
    img.alt = name;

    const label = document.createElement("div");
    label.className = "name";
    label.textContent = name;

    const a = document.createElement("a");
    const href = getSaintUrl(name) || "#";
    a.href = href;
    if (href && href !== "#") { a.target = "_blank"; a.rel = "noopener"; }
    a.appendChild(img);
    a.appendChild(label);

    card.appendChild(a);
    grid.appendChild(card);
  });

  rel.appendChild(grid);
}

// initialization 
updateProgressBar();
//showQuestion();

// Start screen wiring
(function attachStart() {
  const startScreen = document.getElementById("start-screen");
  const start5 = document.getElementById("start-5");
  const start10 = document.getElementById("start-10");
  const quizContainer = document.querySelector(".quiz-container");

  if (!startScreen || !start5 || !start10 || !quizContainer) return;

  function startQuiz(mode) {
  selectedQuizMode = mode;

  startScreen.classList.add("hidden");
  quizContainer.classList.remove("hidden");

  currentQuestionIndex = 0;
  tagScores = {};
  shuffledQuestions = buildQuizQuestionsByMode(mode);

  updateProgressBar();
  showQuestion();
}

  start5.addEventListener("click", () => startQuiz(5));
  start10.addEventListener("click", () => startQuiz(10));
})();



(function attachRetake() {
  const btn = document.getElementById("retake-button");
  if (!btn) return;

  btn.onclick = () => {
    const startScreen = document.getElementById("start-screen");
    const quizContainer = document.querySelector(".quiz-container");
    const resultContainer = document.getElementById("result-container");

    // Reset state
    currentQuestionIndex = 0;
    tagScores = {};
    shuffledQuestions = buildQuizQuestionsByMode(selectedQuizMode);


    updateProgressBar();

    // Show start screen again
    if (resultContainer) resultContainer.classList.add("hidden");
    if (quizContainer) quizContainer.classList.add("hidden");
    if (startScreen) startScreen.classList.remove("hidden");

    // If you'd rather retake immediately (skip start screen), replace the 3 lines above with:
    // if (resultContainer) resultContainer.classList.add("hidden");
    // if (quizContainer) quizContainer.classList.remove("hidden");
    // showQuestion();
  };
})();


