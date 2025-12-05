
function slugifyName(name) {
  return name
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/ /g, "_") + ".png";
}

const questions = [
  {
    text: "What best describes your approach to challenges?",
    answers: [
      { text: "I reflect deeply before acting", tags: ["Spiritual depth", "Mystical union with God"] },
      { text: "I adapt quickly and move forward", tags: ["Adaptability", "Resilience"] },
      { text: "I seek guidance and collaborate", tags: ["Educator", "Scholarship"] },
      { text: "I take charge and lead others", tags: ["Leadership", "Courageous leadership"] }
    ]
  },
{
  text: "Which environment excites you most?",
  answers: [
    { text: "A university campus full of ideas", tags: ["University Student", "Educator"] },
    { text: "Remote villages with new cultures", tags: ["Missionary", "Cross-cultural Engagement"] },
    { text: "A quiet retreat for reflection", tags: ["Contemplation", "Interior Freedom"] },
    { text: "A dynamic team solving problems", tags: ["Leadership", "Visionary leader"] }
  ]
},
{
  text: "How do you prefer to grow spiritually?",
  answers: [
    { text: "Through service and action", tags: ["Missionary", "Resilience"] },
    { text: "Through study and learning", tags: ["Scholarship", "Educator"] },
    { text: "Through prayer and discernment", tags: ["Contemplation", "Interior Freedom"] },
    { text: "Through leadership and example", tags: ["Leadership", "Joyful holiness"] }
  ]
},
{
  text: "What role do you often take in a group?",
  answers: [
    { text: "The thoughtful advisor", tags: ["Contemplation", "Interior Freedom"] },
    { text: "The energetic explorer", tags: ["Missionary", "Adaptability"] },
    { text: "The curious learner", tags: ["University Student", "Scholarship"] },
    { text: "The natural leader", tags: ["Leadership", "Courageous leadership"] }
  ]
},
{
  text: "What inspires you most?",
  answers: [
    { text: "Stories of missionaries in distant lands", tags: ["Missionary", "Cross-cultural Engagement"] },
    { text: "The journey of self-discovery", tags: ["Interior Freedom", "Spiritual depth"] },
    { text: "Academic excellence and wisdom", tags: ["Scholarship", "Educator"] },
    { text: "Overcoming adversity", tags: ["Resilience", "Adaptability"] }
  ]
},
{
  text: "What kind of impact do you want to make?",
  answers: [
    { text: "Inspiring young people", tags: ["Apostle of youth", "Joyful holiness"] },
    { text: "Fighting for justice", tags: ["Social justice advocate", "Defender of the poor"] },
    { text: "Strengthening families", tags: ["Family apostolate", "Love for Church and Society"] },
    { text: "Writing and teaching", tags: ["Writer", "Educator"] }
  ]
},
{
  text: "What drives your passion?",
  answers: [
    { text: "Helping the marginalized", tags: ["Defender of the poor", "Social justice advocate"] },
    { text: "Creating new ideas", tags: ["Apostolic creativity", "Visionary leader"] },
    { text: "Deepening spiritual life", tags: ["Mystical union with God", "Spiritual depth"] },
    { text: "Building community", tags: ["Family apostolate", "Love for Church and Society"] }
  ]
},
{
  text: "Which phrase resonates most?",
  answers: [
    { text: "Lead with courage", tags: ["Courageous leadership", "Leadership"] },
    { text: "Teach with love", tags: ["Educator", "University Student"] },
    { text: "Serve with joy", tags: ["Joyful holiness", "Apostle of youth"] },
    { text: "Pray with depth", tags: ["Spiritual depth", "Mystical union with God"] }
  ]
},
{
  text: "What do you value most?",
  answers: [
    { text: "Justice and equity", tags: ["Social justice advocate", "Defender of the poor"] },
    { text: "Wisdom and learning", tags: ["Scholarship", "Writer"] },
    { text: "Faith and contemplation", tags: ["Contemplation", "Interior Freedom"] },
    { text: "Creativity and vision", tags: ["Apostolic creativity", "Visionary leader"] }
  ]
},
{
  text: "How do you want to be remembered?",
  answers: [
    { text: "As a joyful servant", tags: ["Joyful holiness", "Apostle of youth"] },
    { text: "As a courageous leader", tags: ["Courageous leadership", "Leadership"] },
    { text: "As a wise teacher", tags: ["Educator", "Scholarship"] },
    { text: "As a spiritual guide", tags: ["Spiritual depth", "Mystical union with God"] }
  ]
}
,
{
  text: "Which kind of ministry draws you most?",
  answers: [
    { text: "Teaching the faith clearly and patiently", tags: ["Catechesis", "Educator"]},
    { text: "Bridging cultures to share the Gospel", tags: ["Inculturation", "Evangelisation"]},
    { text: "Serving the poor on the margins", tags: ["Devotion to the poor and marginalised", "Social justice"]},
    { text: "Mentoring others one‑on‑one", tags: ["Spiritual accompaniment", "Wisdom"]}
  ]
},
{
  text: "What kind of peacemaking best fits you?",
  answers: [
    { text: "Mediating conflicts and building bridges", tags: ["Peacebuilder", "Ecumenism"] },
    { text: "Serving together to heal divisions", tags: ["Lay collaboration", "Peacebuilder"] },
    { text: "Standing firm with humility", tags: ["Fidelity", "Humility"] },
    { text: "Clarifying truth to reduce confusion", tags: ["Catechesis", "Intellectual rigor"] }
  ]
},
{
  text: "Which spiritual role feels most natural to you?",
  answers: [
    { text: "One-on-one mentoring and guidance", tags: ["Spiritual accompaniment", "Patience"] },
    { text: "Rallying others toward mission", tags: ["Leadership", "Apostolic zeal"] },
    { text: "Teaching doctrine clearly", tags: ["Catechesis", "Intellectual rigor"] },
    { text: "Praying and discerning with others", tags: ["Wisdom", "Obedience"] }
  ]
},
{
  text: "Where does your personal devotion lead you?",
  answers: [
    { text: "To the Heart of Jesus in reparation", tags: ["Devotion to the Sacred Heart", "Fidelity"] },
    { text: "Toward hidden, steady holiness", tags: ["Holiness in ordinary life", "Patience"] },
    { text: "To an interior freedom from attachments", tags: ["Interior freedom/ detachment", "Obedience"] },
    { text: "Into bold apostolic service", tags: ["Apostolic zeal", "Courage"] }
  ]
},
{
  text: "How do you handle failure?",
  answers: [
    { text: "Reflect, learn, and try again", tags: ["Failure (how to deal with)", "Wisdom"] },
    { text: "Seek forgiveness and make amends", tags: ["Forgiveness", "Humility"] },
    { text: "Ask a mentor to walk with me", tags: ["Spiritual accompaniment", "Patience"] },
    { text: "Re-organize the team and move forward", tags: ["Leadership", "Apostolic zeal"] }
  ]
},
{
  text: "What best describes your missionary approach?",
  answers: [
    { text: "Share faith within my own culture", tags: ["Evangelisation of one's own", "Fidelity"] },
    { text: "Bridge cultures with respect", tags: ["Inculturation", "Missionary zeal"] },
    { text: "Work alongside lay partners", tags: ["Lay collaboration", "Leadership"] },
    { text: "Serve the most vulnerable first", tags: ["Devotion to the poor and marginalised", "Humility"] }
  ]
},
{
  text: "What kind of work for Christian unity resonates most?",
  answers: [
    { text: "Dialogue across traditions", tags: ["Ecumenism", "Ecumenism"] },
    { text: "Teaching shared essentials of faith", tags: ["Catechesis", "Intellectual rigor"] },
    { text: "Serving together despite differences", tags: ["Lay collaboration", "Peacebuilder"] },
    { text: "Quiet prayer for reconciliation", tags: ["Wisdom", "Patience"] }
  ]
},
{
  text: "If you were assigned to youth work, you would…",
  answers: [
    { text: "Form small discipleship groups", tags: ["Youth ministry", "Spiritual accompaniment"] },
    { text: "Teach and prepare them for sacraments", tags: ["Catechesis", "Intellectual rigor"] },
    { text: "Run service projects with them", tags: ["Lay collaboration", "Devotion to the poor and marginalised"] },
    { text: "Call them to generous mission", tags: ["Youth", "Apostolic zeal"] }
  ]
},
{
  text: "Which daily practice sounds most like you?",
  answers: [
    { text: "Steady, unseen faithfulness", tags: ["Holiness in ordinary life", "Patience"] },
    { text: "Freedom from comforts to serve", tags: ["Interior freedom/ detachment", "Obedience"] },
    { text: "Acts of reparation to Jesus’ Heart", tags: ["Devotion to the Sacred Heart", "Fidelity"] },
    { text: "Courageous action for the Gospel", tags: ["Apostolic zeal", "Courage"] }
  ]
},
{
  text: "How do you prefer to teach the faith?",
  answers: [
    { text: "Structured lessons with clear logic", tags: ["Intellectual rigor", "Catechesis"] },
    { text: "Personal accompaniment and witness", tags: ["Spiritual accompaniment", "Wisdom"] },
    { text: "Contextualizing across cultures", tags: ["Inculturation", "Evangelisation"] },
    { text: "Hands-on service that catechizes", tags: ["Lay collaboration", "Devotion to the poor and marginalised"] }
  ]
},
{
  text: "What leadership style do you aspire to?",
  answers: [
    { text: "Seeing the big picture and calling it out", tags: ["Visionary", "Leadership"] },
    { text: "Building peace in tense moments", tags: ["Peacebuilder", "Ecumenism"] },
    { text: "Empowering others to co-lead", tags: ["Lay collaboration", "Leadership"] },
    { text: "Leading with humility and obedience", tags: ["Humility", "Obedience"] }
  ]
}
,
{
  text: "When facing hardship, you…",
  answers: [
    { text: "Persevere even unto death if needed", tags: [ "Perseverance","Martyrdom"]},
    { text: "Choose forgiveness over revenge", tags: [ "Forgiveness", "Humility"]},
    { text: "Detach from comforts and stay free", tags: [ "Interior freedom/ detachment", "Obedience"]},
    { text: "Bounce back and keep serving", tags: [ "Resilience", "Apostolic zeal"]}
  ]
},
{
  text: "Which setting feels like home for your gifts?",
  answers: [
    { text: "Lecture hall or catechism class", tags: [ "Intellectual rigor", "Catechesis"]},
    { text: "Slums, hospitals, and shelters", tags: [ "Devotion to the poor and marginalised", "Social justice advocate"]},
    { text: "Council rooms and leadership tables", tags: [ "Leadership", "Visionary"]},
    { text: "Youth groups and schools", tags: [ "Youth ministry", "Apostle of youth"]}
  ]
},
{
  text: "What personal virtue do you want to grow most?",
  answers: [
    { text: "Purity and chastity", tags: [ "Purity", "Chastity"]},
    { text: "Patience in daily, hidden service", tags: [ "Patience", "Holiness in ordinary life" ]},
    { text: "Greater humility before God and others", tags: [ "Humility", "Obedience"]},
    { text: "Magnanimity—a big heart for big things", tags: [ "Magnanimity", "Courage"]}
  ]
}];
const saintProfiles = {
  "Ignatius of Loyola": [
    "Leadership",
    "Wisdom",
    "Interior freedom/ detachment"
  ],
  "Francis Xavier": [
    "Evangelisation",
    "Missionary zeal",
    "Inculturation"
  ],
  "Peter Faber": [
    "Wisdom",
    "Spiritual accompaniment",
    "Ecumenism"
  ],
  "Paul Miki": [
    "Martyrdom",
    "Courage",
    "Fidelity"
  ],
  "Claude La Colombiere": [
    "Fidelity",
    "Wisdom",
    "Perseverance"
  ],
  "Peter Canisius": [
    "Catechesis",
    "Intellectual rigor",
    "Evangelisation"
  ],
  "Jose Maria Rubio": [
    "Devotion to the poor and marginalised",
    "Leadership",
    "Apostolic zeal"
  ],
  "Jose de Anchieta": [
    "Missionary zeal",
    "Inculturation",
    "Catechesis"
  ],
  "John Francis Regis": [
    "Missionary zeal",
    "Devotion to the poor and marginalised",
    "Perseverance"
  ],
  "Aloysius Gonzaga": [
    "Chastity",
    "Youth",
    "Courage"
  ],
  "Alberto Hurtado": [
    "Apostolic zeal",
    "Devotion to the poor and marginalised",
    "Leadership"
  ],
  "Peter Claver": [
    "Devotion to the poor and marginalised",
    "Humility",
    "Missionary zeal"
  ],
  "Robert Bellarmine": [
    "Intellectual rigor",
    "Catechesis",
    "Spiritual accompaniment"
  ],
  "Francis Borgia": [
    "Humility",
    "Leadership",
    "Interior freedom/ detachment"
  ],
  "Isaac Jogues": [
    "Martyrdom",
    "Courage",
    "Perseverance"
  ],
  "Jean de Brebeuf": [
    "Martyrdom",
    "Inculturation",
    "Leadership"
  ],
  "Noel Chabanel": [
    "Martyrdom",
    "Humility",
    "Perseverance"
  ],
  "Alphonsus Rodriguez": [
    "Humility",
    "Patience",
    "Holiness in ordinary life"
  ],
  "Stanislaus Kostka": [
    "Youth",
    "Chastity",
    "Perseverance"
  ],
  "Joseph Pignatelli": [
    "Leadership",
    "Ecumenism",
    "Fidelity"
  ],
  "Edmund Campion": [
    "Martyrdom",
    "Intellectual rigor",
    "Courage"
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
  if (!fill || !questions.length) return;
  const percent = Math.round((currentQuestionIndex / questions.length) * 100);
  fill.style.width = percent + "%";
}

function showQuestion() {
  const container = document.getElementById("question-container");
  if (!container) return;
  container.innerHTML = "";

  if (currentQuestionIndex >= questions.length) {
    showResult();
    return;
  }

  const q = questions[currentQuestionIndex];

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
    if (currentQuestionIndex < questions.length) {
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
      const prayer = info.prayer ? `<p><strong>Prayer:</strong> ${info.prayer}</p>` : "";
      html = [quote ? `<blockquote>${quote}</blockquote>` : "", prayer].filter(Boolean).join("");
    }
    if (!html && topSaint) html = `Interested in learning more about ${topSaint}?`;
    msgEl.innerHTML = html || "";
  }

  if (tagsEl) {
    tagsEl.innerHTML = "";
    (saintProfiles[topSaint] || []).forEach(tag => {
      const pill = document.createElement("span");
      pill.classList.add("tag-pill");
      pill.textContent = tag;
      pill.addEventListener("click", () => showRelatedByTag(tag, topSaint));
      tagsEl.appendChild(pill);
    });
  }

  const progress = document.getElementById("progress-fill");
  if (progress) progress.style.width = "100%";

  const retake = document.getElementById("retake-button");
  if (retake) {
    retake.onclick = () => {
      currentQuestionIndex = 0;
      tagScores = {};
      if (resultContainer) resultContainer.classList.add("hidden");
      if (quizContainer) quizContainer.classList.remove("hidden");
      updateProgressBar();
      showQuestion();
    };
  }
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
showQuestion();

(function attachRetake() {
  const btn = document.getElementById("retake-button");
  if (!btn) return;
  btn.onclick = () => {
    currentQuestionIndex = 0;
    tagScores = {};
    document.getElementById("result-container").classList.add("hidden");
    document.querySelector(".quiz-container").classList.remove("hidden");
    updateProgressBar();
    showQuestion();
  };
})();
