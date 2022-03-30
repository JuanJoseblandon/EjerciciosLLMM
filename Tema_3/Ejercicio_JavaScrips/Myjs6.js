
    var cita = [
     "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
     "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
     "a man protects himself. a great man protects others",
     "My conclusion is that hatred is a drag. Life is too short to always be pissed off",
     "Never let anyone tell you that you can't do something. Not even me. If you have a dream, you have to protect it. People who can't do something for themselves will tell you that you can't do it either. Want something? go for it period",
     "death smiles at us all, let's smile back",
     "one always finds one's destiny on the path one takes to avoid it",
     "There are, of course, people who don't want us to talk. I suspect that at this moment, they will be giving orders over the phone and that armed men are already on their way. Why? Because while force can be used, why dialogue? However, words will always retain their power, words make it possible for something to take on meaning and if they are heard, they state the truth. And the truth is, that in this country, something is very wrong, right? Cruelty and injustice, intolerance and oppression. Before you had the freedom to object, to think and say what you thought, now you have censors and surveillance systems that restrict you so that you conform and become submissive",
   ]
  var autor = [
      "Life",
      "John kenneth Galbraith",
      "Otis",
      "Derek vinyard",
      "Crhis Gardner",
      "Maximo decimo meridio",
      "Oogway",
      "V"
    ]
function numero() {
   var numero = Math.floor(Math.random() * (cita.length));
    document.getElementById('357').innerHTML = cita[numero];
    document.getElementById('autor').innerHTML = autor[numero];
}
