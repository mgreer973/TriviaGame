var triviaGame = {
    questions: {
        q0 : {
            quest: 'The Giants started the 2007 season 0-2 after giving up a combined 80 points to the Cowboys and Packers. Then, in week 3, after being down 17-3 at halftime, the Giants scored 21 unanswered points, to beat which team?',
            choices: ['Atlanta Falcons', 'Philadelphia Eagles',
            'Washington Redskins', 'San Francisco 49ers'],
            answer: 'Washington Redskins'             
        }, 
        q1 : {
            quest: 'In week 4 the Giants hosted the Philadelphia Eagles on Sunday Night Football. The Giants tied an NFL record by sacking Donovan Mcnabb 12 times. Which Giant led the charge with 6 on his own?',
            choices: ['Justin Tuck', 'Osi Umenyiora', 'Michael Strahan', 'Mathias Kiwanuka'],
            answer: 'Osi Umenyiora' 
        },
        q2 : {
            quest: ' In week 8 of 2007, the Giants played the first NFL regular season game ever played outside of the United States. Who did they play?',
            choices: ['New York Jets', 'Buffalo Bills', 'Miami Dolphins', 'New England Patriots'],
            answer: 'Miami Dolphins' 
        },
        q3 : {
            quest: "Amani Toomer surpassed Tiki Barber as the team's alltime leader in receptions. He also surpassed which former Giant as the team's leader in receiving touchdowns?",
            choices: ['Stephen Baker', 'Mark Bavaro', 'Kyle Rote', 'Chris Calloway'],
            answer: 'Kyle Rote' 
        },
        q4 : {
            quest: 'Throughout the season, the Giants employed various running backs. Which of the following did NOT rush for 100 yards in a game?',
            choices: ['Reuben Droughns','Brandon Jacobs',
            'Derrick Ward', 'Ahmad Bradshaw'],
            answer: 'Reuben Droughns' 
        },
        q5 : {
            quest: 'Eli Manning had one of the worst games of his young career against the Minnesota Vikings in week 12, throwing 4 intercetptions. How many of them were returned for touchdowns?',
            choices: ['1', '3','2','4'],
            answer: '3'             
        }, 
        q6 : {
            quest: 'Who scored the Giants lone special team touchdown of the 2007 season?',
            choices: ['Domenik Hixon', 'Reuben Droughns','Ahmad Bradshaw', 'Corey Webster'],
            answer: 'Domenik Hixon' 
        }, 
        q7 : {
            quest: ' Which Giants defensive back had interceptions in the first two playoff games, that seemingly sealed the game for the Giants?',
            choices: ['Corey Webster', 'R.W. Mcquarters', 'Kevin Dockery', 'Sam Madison'],
            answer: 'R.W. Mcquarters' 
        },
        q8 : {
            quest: 'Super Bowl XLII got off to a slow start as the score was 7-3 going into the 4th quarter. The Giants offense, especially, was having trouble moving the ball. But the play opened up on the second play of the 4th quarter when Eli Manning connected with which tight end on a 45 yard play?',
            choices: ['Kevin Boss','Michael Matthews','Jeremy Shockey', 'Visante Shiancoe'],
            answer: 'Kevin Boss' 
        },
        q9 : {
            quest: 'Super Bowl XLII: after New England went ahead with less than 3 minutes to go, Eli Manning took the Giants down the field on a game winning drive, highlighted by one of the great plays in Super Bowl history. Manning managed to spin away from 3 defenders and connected on a 32 yard pass to which receiver?',
            choices: ['Amani Toomer', 'Steve Smith', 'David Tyree', 'Plaxico Burress'],
            answer: 'David Tyree' 
        },
        q10 : {
            quest: 'The Giants started the 2007 season with two tough losses, one on the road and one at home. However, they quickly rebounded to win a remarkable six games in a row. Who did they beat in Week 3 to start their impressive streak?',
            choices: ['Atlanta Falcons', 'Philadelphia Eagles', 'New York Jets', 'Washington Redskins'],
            answer: 'Washington Redskins'             
        }, 
        q11 : {
            quest: "One of the unique things about the Giants' season was their road trip in Week 8. They traveled to Europe to play the Miami Dolphins in the NFL's first regular season game played outside of North America. Where was this historic game played?",
        choices: ['Dublin, Ireland', 'Stockholm, Sweden', 'Berlin, Germany', 'London, England'],
            answer: 'London, England' 
        }, 
        q12 : {
            quest: 'In 2007, Eli Manning started all 16 games. His backup only played twice. Who was his backup?',
            choices: ['Kurt Warner', 'Jesse Palmer', 'Kerry Collins', 'Jared Lorenzen'],
            answer: 'Jared Lorenzen' 
        },
        q13 : {
            quest: "The Giants' leading rusher in 2007 ran for over 1,000 yards on 202 attempts in just 11 games. He also scored 4 touchdowns. Who was this #27?",
            choices: ['Derrick Ward','Brandon Jacobs','Reuben Droughns','Ahmad Bradshaw'],
            answer: 'Brandon Jacobs' 
        },
        q14 : {
            quest: "Eli Manning's favorite target led the team in receiving, with over 1,000 yards and scoring 12 touchdowns. Who was this #17?",
            choices: ['Amani Toomer','Steve Smith','Jeremy Shockey','Plaxico Burress'],
            answer: 'Plaxico Burress' 
        },
        q15 : {
            quest: "The Giants' game against the Packers in the NFC championship was perhaps as exciting as the Super Bowl itself. Giants kicker Lawrence Tynes made a 47yard field goal in overtime to send the Giants to the Super Bowl. How many field goals did Tynes miss before booting the game winner?",
            choices: ['3', '2', '1', '0'],
            answer: '2'             
        }, 
        q16 : {
            quest: "Without question, the most memorable play in Super Bowl XLII was Eli Manning's 32 yard pass to David Tyree (which he had to pin the ball against his helmet to hold onto) to put the Giants in scoring range with one minute to go in the game. What was the down on which Manning completed the pass to Tyree?",
            choices: ['3rd Down', '1st Down', '2nd Down', '4th Down'],
            answer: '3rd Down' 
        }, 
        q17 : {
            quest: 'Which Giants player caught the game winning 13yard touchdown pass from Manning?',
            choices: ['Amani Toomer', 'Plaxico Burress', 'Kevin Boss', 'Steve Smith'],
            answer: 'Plaxico Burress' 
        },
        q18 : {
            quest: 'Eli Manning threw how many touchdowns in the 2007 regular season?',
            choices: ['50', '21', '23','35'],
            answer: '23' 
        },
        q19 : {
            quest: 'What was the New York Giants record in 2007?',
            choices: ['New York Jets', 'Buffalo Bills', 'Miami Dolphins', 'New England Patriots'],
            answer: 'Miami Dolphins' 
        },
        q20 : {
            quest: 'What was the New York Giants record in 2007?',
            choices: ['11-5', '12-4', '9-7', '10-6'],
            answer: '10-6'             
        }, 
        q21 : {
            quest: ' The Giants finished second in the NFC East to who in 2007?',
            choices: ['Redskins', 'Patriots', 'Eagles', 'Cowboys'],
            answer: 'Cowboys' 
        }, 
        q22 : {
            quest: 'Which receiver had the the most touchdowns for the Giants in the 2007 season?',
            choices: ['Amani Toomer', 'Jeremy Shockey', 'Steve Smith', 'Plaxico Burress'],
            answer: 'Plaxico Burress' 
        },
        q23 : {
            quest: 'The Giants had a ____ game winning streak in the 2007 season?',
            choices: ['5', '6', '8', '10'],
            answer: '6' 
        },
        q24 : {
            quest: 'Michael Strahan had a sack in an Eagles game to set him on 133.5 sacks for his career, passing which former Giants player for the team record?',
            choices: ['Lawrence Taylor', 'Brad Van Pelt', 'Leonard Marshal', 'George Martin'],
            answer: 'Lawrence Taylor' 
        } 
    }
};
var time = 240;
var arr = [];
var qj = [];
var num = 0;
var questOut = '';
var answerOut = '';
var answersArr = [];
var qValue = '';
var objKeys = '';
var incAns = 0;
var corAns = 0;
var notAns = 0;
var correctAnswer = '';

$( document ).ready(function() {
      startBut();
			$("#start" ).on('click', function() {
    		  $('#info').html('');
  	     	restart();
			});
});

function startBut() {
    var but = $('<button>');
    but.text('Start');
    but.attr('id', 'start');
    $('#info').append(but);
}


function restart() {	
   start();
	 getQuestion();
   $("#done" ).on('click', function() {

   for (var w=0; w < objKeys.length; w++) {
        var thequestion=eval("document.myquiz.q"+w);

        for (c=0;c<thequestion.length;c++){
            if (thequestion[c].checked==true) {
                qValue = thequestion[c].value;
            }
            correctAnswer = 'N'
            if (qValue != null) {
               if (answersArr[w] == qValue) {
                  correctAnswer = 'Y';
             }else {
             correctAnswer = 'U';
              }
          }
        }
        switch (correctAnswer) {
          case 'Y':
            corAns++;
            break; 
          case 'N':
            incAns++;
            break; 
          default: 
            notAns++;
            break;
        }
    }
    alert('corAns ' + corAns);
    alert('incAns ' + incAns);
    alert('notAns ' + notAns);
    $('#formOut').html('');
    $('#quest').html('');
    $('#done').html('');
    $('#info').empty();
    stop();
    displayResults();
    startBut();
$("#start" ).on('click', function() {
          $('#info').html('');
          restart();
      });
  });

};


 function reset(){
   time = 240;
   $('#timer').html('Time Remaining: 240 seconds');
 }

 function start(){
   counter = setInterval(count, 1000);
 }

 function stop(){
   clearInterval(counter);
 }

 function count(){
    
   time--;
//   var converted = timeConverter(time);
   var secLeft = 'Time Remaining: ' + time + ' Seconds';
   $('#timer').html(secLeft);
   if (time < 0) {
      alert('You lose');
      stop();
   }
 }

 function timeConverter(t){
   var minutes = Math.floor(t/60);
   var seconds = t - (minutes * 60);
   if (seconds < 10){
     seconds = "0" + seconds;
   }
   if (minutes === 0){
     minutes = "00";
   } else if (minutes < 10){
     minutes = "0" + minutes;
   }
//   return minutes + ":" + seconds;
     return seconds;
 }


function getQuestion() {
	objKeys = Object.keys(triviaGame.questions);

    for (var h = 0; h < objKeys.length; h++) {
        var n = h.toString();
//        alert('n ' + n);
		var qc = 'q' + n;
		var choicesArray = [];
		var questInPlay = triviaGame.questions[qc];
		var qu = questInPlay.quest;
    answersArr.push(questInPlay.answer);

//       $("#quest").empty();
//       $("#answ").empty();

        var q = $('<div>');
        q.addClass('qheader');
        q.text(qu);
        q.attr('id', qc)
        $('#quest').append(q);

        var lineBr = $('<br>');
        var d = $('<div>');
        d.addClass('choices');
        $('.qheader').append(d);

        choicesArray = questInPlay.choices;

        for (var b = 0; b < choicesArray.length; b++) {

            var l = $('<label>');
            l.attr('for', choicesArray[b]);
            l.text(choicesArray[b]);
            $('#' + qc).append(l);
            var c = $('<input>');
            c.attr('type', 'radio');
            c.attr('name', qc);
            c.attr('value',choicesArray[b]);
            c.attr('id',choicesArray[b]);
            c.attr('data-choice', choicesArray[b]);
            $('#' + qc).append(c);
            
        }
        
    }
    doneButton();
}

function doneButton() {
    var z = $('<button>');
    z.addClass('done');
    z.text('Done');
    $('#done').append(z);

}

function displayResults() {
        var r1 = $('<div>');
        r1.text('Correct Answers: ' + corAns);
        $('#result').append(r1);
        var r2 = $('<div>');
        r2.text('Incorrect Answers: ' + incAns);
        $('#result').append(r2);
        var r3 = $('<div>');
        r3.text('Not Answered: ' + notAns);
        $('#result').append(r3);
      
};

