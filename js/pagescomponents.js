import { hideSponsors } from './maintest.js';

$(window).on("load", function() {
  $('.closeSec').hide();
  $('.infotext').hide();
  $('.boxtitle').hide();
  $('.dropsel').hide();
  $('.sent').hide();
  $('.moreawards').hide();
  $('.awoverlay').hide();
  $('.spoverlay').hide();
  $('.moresponsors').hide();
  $('.caption').hide();
  $('.compvideo').hide();
  //declaring instances
  const a2Maker = new panelAndDefaults();
  const a3Maker = new panelAndDefaults();
  const a4Maker = new panelAndDefaults();
  const a5Maker = new panelAndDefaults();
  const secEditor = new sectionMan();
  const dropdownManipulator = new dropdownMan('.B3', ['.B3 .middle .title', '.B3 .middle .infofromsides']);
  a2Maker.newPanel("p r o g r a m m i n g", "Programming serves as a key part of the FTC competition, making our robot move based on the controller and also sensors. Our four programmers help develop Java code for Autonomous and TeleOp, bringing us up on top. We practice together, discussing issues and testing prototypes of our programs. In the end, we aim to build a great program to perform our best.", ".A2", ".leftside");

  //all the configs
  $('.A2 .rightside .images .imgtopleft').click(function() {
    a2Maker.newPanel("j o s h u a", "The Captain of the Programming Division, Joshua oversees the creation of the autonomous and tele-op programs. He also made various side programs, including one for presentations and another that can play music. Joshua enjoys programming games, playing chess, and spending time with friends and family.", ".A2", ".leftside");
  });
  $('.A2 .rightside .images .imgbottomleft').click(function() {
    a2Maker.newPanel("e r i c", "As a former Team Lawyer, Eric, who's in 8th grade, understands the rulebook front to back, in addition to being a top-notch programmer and programming the encoder-based autonomous program on the Crater Side. He enjoys programming, playing basketball, and Bitcoin.", ".A2", ".leftside");
  });
  $('.A2 .rightside .images .imgbottomright').click(function() {
    a2Maker.newPanel("d a n i e l", "As Captain of Multimedia, Daniel programs our website in addition to the robot. He created the current website, and also the time-based autonomous programs for the competition. He enjoys learning new programming languages, playing basketball, and HODLING.", ".A2", ".leftside");
  });
  $('.A2 .rightside .images .imgbottommiddle').click(function() {
    a2Maker.newPanel("p r o g r a m m i n g", "Programming serves as a key part of the FTC competition, making our robot move based on the controller and also sensors. Our four programmers help develop Java code for Autonomous and TeleOp, bringing us up on top. We practice together, discussing issues and testing prototypes of our programs. In the end, we aim to build a great program to perform our best.", ".A2", ".leftside");
  });

  $('.A3 .leftside .images .imgbottomright').click(function() {
    a3Maker.newPanel("K E V I N", "", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgbottomleft').click(function() {
    a3Maker.newPanel("K A W I N", "Kawin stands as the Robot Captain, overlooking the robot from start to end. He is a key builder for our robot, starting from assembling the chassis to last-minute fixes. Other than that, Kawin works on the Promote video and helps out other team members with mechanical issues. At school, Kawin is part of the marching band; at home, he watches anime.", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgbottommiddle').click(function() {
    a3Maker.newPanel("B U I L D I N G", "Without a robot, we would never win a competition. Where other category members can’t fill in, we have Building members swoop in to build the robot. Through all the work and dedication, the 5 main builders have constructed the base, scoring mechanism, intake system, protection safeties, and wiring setups. Just to name a few, they use power tools, brackets, channels, zip ties, a variety of nuts and bolts, hammers, and plexiglass to construct the robot. ", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgtopleft').click(function() {
    a3Maker.newPanel("G L O R Y", "Glory, Electrician Captain, helps with organizing the wires and wiring the robot. With the use of zip ties, she prevents the wires from turning into a spaghetti like mess and interfering with the robot’s mechanisms. She is also a scouter and keeps track of game points during practice runs and meets. She is a neat freak who enjoys reading and talking to plants.", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgtopright').click(function() {
    a3Maker.newPanel("I A N", "", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgtopmiddle').click(function() {
    a3Maker.newPanel("G O R D O N", "CAD Captain Gordon works on 3D documenting the robot and helps to build the robot. Gordon’s CAD (Computer-Aided Design) files are useful for taking a look at our robot at angles we usually can’t do physically. It also helps share our ideas with the rest of the world, so they can build and learn off it. CAD helps prototype the robot on a computer so that it wouldn’t break when we build it. When building it, he also helps out. Other than robotics, Gordon plays on the golf team and is a tech and anime enthusiast.", ".A3", ".rightside");
  });

  $('.A4 .rightside .images .imgbottomright').click(function() {
    a4Maker.newPanel("e v a n", "Evan is the head of Financing for our team, serving as the UCTA for Wolf Corp. He manages our balances and regularly inputs spendings and raised money. Evan also contributes to building the robot to give an extra hand. He works with Google Sheets and lots of numbers. Evan enjoys gaming, playing basketball, and practicing piano.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgbottomleft').click(function() {
    a4Maker.newPanel("s a r a h", "Sarah controls the Engineering Notebook, an important part of the . It keeps all the documents of our team, even what we have as snacks for each practice. Sarah also meets with businesses in person, asking for a funding to keep our team going. Sarah loves to listen to music, watch the newest movies, and hang out with friends.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgbottommiddle').click(function() {
    a4Maker.newPanel("b u s i n e s s", "Although it may not seem like it, Business members are vital to having a functional team. Business controls our external relationships with businesses, experts and outreach events, while also doing documentation and scouting for competition. They find places to spread the world of STEM, attract sponsors to support our team, invite experts over to give us tips, manage the Engineering Notebook, and get information about who could benefit us as an Alliance. Business members always try to keep track of our programming and building progress as well, so we can accurately recollect of what we have done. They fill the Engineering Notebook with great details about our team’s accomplishments and hope to inspire kids to do as great.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgtopleft').click(function() {
    a4Maker.newPanel("j a s o n", "Jason works on the Engineering Section for our team, drives the robot during the competition, and helps build and maintain the robot. In the Engineering Section, Jason includes the robot’s mechanisms and functionalities. When he’s not doing robotics, he plays games, dragonboats, and practices the handbell.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgtopright').click(function() {
    a4Maker.newPanel("c o n o r", "Conor oversees Documentation for our team. He ensures that anything from fundraising to Autonomous runs is recorded down, either on paper or online. Conor also keeps check on the robot, making sure it’s not broken or fixing it when it is. In his free time, Conor reads, sleeps, and plays with his dog Tara.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgtopmiddle').click(function() {
    a4Maker.newPanel("n a t h a n", "Nathan is the Business leader for Wolf Corp and supervises all main operations in the category. He reaches out to businesses as a part of that, looking for some to support our team. Besides that, he is also a builder, scouter, and outreach documenter. Nathan likes to play PC games, swim, listen to music, and practice the piano.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgextra').click(function() {
    a2Maker.newPanel("c h a n d r a r k", "", ".A4", ".leftside");
  });

  $('.A5 .botside .images .imgfarleft').click(function() {
    a5Maker.newPanel("c o n n e c t i n g \xa0\xa0w i t h \xa0\xa0o t h e r s", "As Wolf Corp., our goal is to inspire other kids to work as a team and get involved in STEM education. The robot isn’t the only part of the competition, and we never aim to just get first place in the competition. Truly impacting the community and people around us to be excited about robotics and STEM is what we aspire to do. Instead of just focusing on our team, we aim to influence brilliant teenagers and kids to improve the world.", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgkindaleft').click(function() {
    a5Maker.newPanel("o u r \xa0\xa0r o b o t i c s \xa0\xa0c l u b", "At Walnut High School, we were able to set up the first robotics club to encourage our school to learn more about STEM and robotics. We inspired two teachers, Ms. Lindemann and Mr. Madrid, to help support our cause and become our advisors. Mr. Madrid helps out on the advisor-required meetings and has useful tips for running the club. We have meetups every other Tuesday during lunch at Ms. Lindemann’s classroom, to discuss our robot and teach them some new information. Students can come anytime during the season and is open to everyone. Our club has successfully connected Walnut High to FIRST.", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgmidleft').click(function() {
    a5Maker.newPanel("o u t r e a c h", "Outreaches help us connect to all ages and get them thinking about the STEM field. We have done more than 70 outreaches around the region, such as at Pasadena Library, Imaginology Expo, and LA Fair. We’ve gone to all these places to showcase our robots and let children from 3 years old to adults interested in our team to try driving it and picking up blocks. Without outreaches, people wouldn’t know about a great revolution happening in technology.", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgmidright').click(function() {
    a5Maker.newPanel("h a v i n g \xa0\xa0a \xa0\xa0h e a r t \xa0\xa0o f \xa0\xa0h o p e", "Wolf Corp also emphasizes helping the disadvantaged and strive to bring happiness and great experiences to them through robotics. For example, we visit non-profit organization Heart of Hope to host a STEM activity once a month for more than 60 special needs children and adults. Our goal is to help connect them to the real world by using the FIRST program. We participated in the Autism Walk, Relay for Life, and the Walnut city Trunk or Treat in order to give back to our community. In addition, we raised money to support the American Cancer Society. Caring for others is a moral we should have in doing anything, not just robotics.", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgkindaright').click(function() {
    a5Maker.newPanel("e x p e r t s", "Our team has connected to more than 20 STEM experts for knowledge. For example, we visited Walnut Valley Robotics to learn about electrical power tools. We met with Dr. Spiros, the Manager of Outreach at CalTech. He reviewed our outreaches and encouraged us to do more. Also, Mr. Jacob, a JPL robotics engineer helped us with our scoring mechanism issue and suggested we have a pre-check and post-check for our robot before and after a match. We went to the “Crush Master and Grinding Company” who gave us a tour and introduced us to CNC and WATER JET machines which they later used to cut multiple pieces for our robot. Experts are always a big help to us, and are a great part of the community.", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgfarright').click(function() {
    a5Maker.newPanel("f i r s t \xa0\xa0 v o l u n t e e r i n g", "From helping other teams to holding workshops, we also encourage other teams to do their best. Our team mentored multiple FLL teams such as HEXA Challengers who are advancing to the World Festival this year. At the beginning of the season, we hosted 2 programming workshops for 12 new coaches at Suzanne Middle school. Every summer, we host a robotics workshop at the walnut library where we teach kids how to build and program robots. We also held 2 workshops for new FTC teams and volunteered at 3 FLL and 2 FTC tournaments.", ".A5", ".topside");
  });

  $('.B1 .sections .topleft button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.topleft', '.B1');
  });
  $('.B1 .sections .topright button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.topright', '.B1');
  });
  $('.B1 .sections .botleft button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.botleft', '.B1');
  });
  $('.B1 .sections .botright button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.botright', '.B1');
  });
  $('.B1 .sections .closeSec').click(function() {
    $('.B1 .sections .closeSec').fadeOut(250);
    secEditor.showAllSec('.B1');
  });

  $('.B2 .sections .topleft button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.topleft', '.B2');
  });
  $('.B2 .sections .topright button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.topright', '.B2');
  });
  $('.B2 .sections .botleft button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.botleft', '.B2');
  });
  $('.B2 .sections .botright button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.botright', '.B2');
  });
  $('.B2 .sections .topmid button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.topmid', '.B2');
  });
  $('.B2 .sections .botmid button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.botmid', '.B2');
  });
  $('.B2 .sections .closeSec').click(function() {
    $('.B2 .sections .closeSec').fadeOut(250);
    secEditor.showAllSec('.B2');
  });

  //B3 Dropdown stuff
  $('.B3 .left .dropdown .droplabel').click(function() {
    if (dropdownleftopen) {
      $('.B3 .left .dropdown .dropmenu .dropsel').removeClass('fadeInDown');
      $('.B3 .left .dropdown .dropmenu .dropsel').addClass('fadeOutUp');
      $('.B3 .left .dropdown .dropmenu .dropsel').fadeOut(1500);
      $('.B3 .left .dropdown .droplabel img').removeClass('flip180');
      $('.B3 .left .dropdown .droplabel img').addClass('unflip180');
      dropdownleftopen = false;
    } else {
      $('.B3 .left .dropdown .dropmenu .dropsel').addClass('fadeInDown');
      $('.B3 .left .dropdown .dropmenu .dropsel').removeClass('fadeOutUp');
      $('.B3 .left .dropdown .dropmenu .dropsel').show();
      $('.B3 .left .dropdown .droplabel img').removeClass('unflip180');
      $('.B3 .left .dropdown .droplabel img').addClass('flip180');
      dropdownleftopen = true;
    }
  });
  $('.B3 .right .dropdown .droplabel').click(function() {
    if (dropdownrightopen) {
      $('.B3 .right .dropdown .dropmenu .dropsel').removeClass('fadeInDown');
      $('.B3 .right .dropdown .dropmenu .dropsel').addClass('fadeOutUp');
      $('.B3 .right .dropdown .dropmenu .dropsel').fadeOut(1500);
      $('.B3 .right .dropdown .droplabel img').removeClass('flip180');
      $('.B3 .right .dropdown .droplabel img').addClass('unflip180');
      dropdownrightopen = false;
    } else {
      $('.B3 .right .dropdown .dropmenu .dropsel').addClass('fadeInDown');
      $('.B3 .right .dropdown .dropmenu .dropsel').removeClass('fadeOutUp');
      $('.B3 .right .dropdown .dropmenu .dropsel').show();
      $('.B3 .right .dropdown .droplabel img').removeClass('unflip180');
      $('.B3 .right .dropdown .droplabel img').addClass('flip180');
      dropdownrightopen = true;
    }
  });
  dropdownManipulator.handleChoice(1, '.left', 'Chassis', 'a');
  dropdownManipulator.handleChoice(2, '.left', 'Protectors', 'b');
  dropdownManipulator.handleChoice(3, '.left', 'Sensors and Encoders', 'c');
  dropdownManipulator.handleChoice(4, '.left', 'Channels, Gears, and More', 'd');
  dropdownManipulator.handleChoice(1, '.right', 'Wheels', 'e');
  dropdownManipulator.handleChoice(2, '.right', 'Intake System', 'f');
  dropdownManipulator.handleChoice(3, '.right', 'Deposit System', 'g');
  dropdownManipulator.handleChoice(4, '.right', 'Hanging', 'h');

  $('.panel').hover(function () {
    let classed = this.className;
    console.log(classed);

    if (classed.search('B') > 0 || classed.search('D d') > 0 || classed.search('E e') > 0  || classed.search('A a') > 0 || classed.search('A5') > 0 || classed.search('C c') > 0) {
      $('.nav .menu-open').addClass('invertedColors');
      $('.nav .back').addClass('invertedColors');
    } else if (classed.search('A1') > 0 || classed.search('A3') > 0) {
      $('.nav .menu-open').addClass('invertedColors');
      $('.nav .back').removeClass('invertedColors');
    } else if (classed.search('A2') > 0 || classed.search('A4') > 0) {
      $('.nav .menu-open').removeClass('invertedColors');
      $('.nav .back').addClass('invertedColors');
    } else {
      $('.nav .menu-open').removeClass('invertedColors');
      $('.nav .back').removeClass('invertedColors');
    }

    if (classed.search('C c') > 0) {
      $('.C').attr('id', 'particles-js');
      $('.D').removeAttr('particles-js');
      $('.E').removeAttr('particles-js');
    } else if (classed.search('D d') > 0) {
      $('.D').attr('id', 'particles-js');
      $('.C').removeAttr('particles-js');
      $('.E').removeAttr('particles-js');
    } else if (classed.search('E e') > 0) {
      $('.E').attr('id', 'particles-js');
      $('.D').removeAttr('particles-js');
      $('.C').removeAttr('particles-js');
    }
  });

  //Contact page validation/tabbing
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      $('body').addClass('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  };

  $('.D form').mousemove(function() {
    $('body').removeClass('user-is-tabbing');
    window.addEventListener('keydown', handleFirstTab);
  });

  $(':input[type=number]').on('mousewheel', function(e){
    e.preventDefault();
  });

  window.addEventListener('keydown', handleFirstTab);

  // awards page
  $('.seemore').click(function() {
    $('.moreawards').removeClass('fadeOutDown');
    $('.seemore').removeClass('fadeIn');
    $('.moreawards').addClass('fadeInUpBig');
    $('.seemore').addClass('fadeOut');
    $('.moreawards').show();
    $('.up').hide();
  });

  $('.doneseeing').click(function() {
    $('.moreawards').removeClass('fadeInUpBig');
    $('.seemore').removeClass('fadeOut');
    $('.moreawards').addClass('fadeOutDown');
    $('.seemore').addClass('fadeIn');
    $('.seemore').show();
    $('.up').show();
  });

  $('.moreawardslist').children('.exaward').each(function () {
    $(this).hover(function(event) {
      $(this).children('.awoverlay').removeClass('fadeOutDownBigSlow');
      $(this).children('.awoverlay').addClass('fadeInUp');
      $(this).children('.awoverlay').show();
    }, function(event) {
      $(this).children('.awoverlay').removeClass('fadeInUp');
      $(this).children('.awoverlay').addClass('fadeOutDownBigSlow');
    });
  });

  $('.award').each(function() {
    $(this).hover(function(event) {
      $(this).children('.caption').removeClass('fadeOutDown');
      $(this).children('.caption').addClass('fadeInUp');
      $(this).children('.caption').show();
    }, function(event) {
      $(this).children('.caption').removeClass('fadeInUp');
      $(this).children('.caption').addClass('fadeOutDown');
    });
  });

  // sponsors page
  let moreSponOpen = false;
  let arconic = false;

  setTimeout(function() {
    setInterval(function() {
      if (arconic) {
        arconic = false;
        $(".big3 .third").css('opacity', '0');
        $('.big3 .third').css('margin', '10vh 0 10vh 0');
        setTimeout(function() {
          $(".big3 .third").attr("src","css/images/rockwellcollins.png");
          $(".big3 .third").css('opacity', '1');
        }, 1000);
      } else {
        arconic = true;
        $(".big3 .third").css('opacity', '0');
        $('.big3 .third').css('margin', '0');
        setTimeout(function() {
          $(".big3 .third").attr("src","css/images/arconic.png");
          $(".big3 .third").css('opacity', '1');
        }, 1000);
      }
    }, 6000);
  }, 4000);

  $('.seemores').click(function() {
    $('.moresponsors').removeClass('fadeOutDown');
    $('.seemores').removeClass('fadeIn');
    $('.moresponsors').addClass('fadeInUpBig');
    $('.seemores').addClass('fadeOut');
    $('.moresponsors').show();
    moreSponOpen = true;
  });

  $('.sponsor').click(() => {
    if (moreSponOpen) {
      $('.moresponsors').removeClass('fadeInUpBig');
      $('.seemores').removeClass('fadeOut');
      $('.moresponsors').addClass('fadeOutDown');
      $('.seemores').addClass('fadeIn');
      $('.seemores').show();
      moreSponOpen = false;
    } else {
      $('.viz').show();
      hideSponsors();
    }
  });

  $('.sponsorlist').children('.asponsor').each(function () {
    $(this).hover(function(event) {
      $(this).children('.spoverlay').removeClass('fadeOutDownBigSlow');
      $(this).children('.spoverlay').addClass('fadeInUp');
      $(this).children('.spoverlay').show();
    }, function(event) {
      $(this).children('.spoverlay').removeClass('fadeInUp');
      $(this).children('.spoverlay').addClass('fadeOutDownBigSlow');
    });
  });
});

//classes for a
class panelAndDefaults {
  constructor() {
    this.textString = '';
    this.titleString = '';
    this.textOptions = {
      strings: [" ", this.textString],
      typeSpeed: 5,
      backSpeed: 0.1,
      showCursor: false,
      onComplete: (self) => {
        this.picChose1 = false;
      }
    };
    this.titleOptions = {
      strings: [" ", this.titleString],
      typeSpeed: 30,
      backSpeed: 15,
      showCursor: false,
      onComplete: (self) => {
        this.picChose = false;
      }
    };
    this.titleTyped;
    this.textTyped;
    this.picChose = false;
    this.picChose1 = false;
  }

  newPanel(titleString, textString, panel, side) {
    if (!this.picChose && !this.picChose1) {
      titleString = titleString.toUpperCase();
      this.titleOptions.strings[1] = titleString;
      this.textOptions.strings[1] = textString;
      $('.line').hide();
      setTimeout(() => {$('.line').show()}, 1000);
      this.titleTyped = new Typed(`${panel} ${side} .title`, this.titleOptions);
      this.textTyped = new Typed(`${panel} ${side} .maintext`, this.textOptions);
      this.textTyped.start();
      this.picChose = true;
      this.picChose1 = true;
    }
  }
}

// class for b1 b2 sections
class sectionMan {
  constructor() {
    this.sections = [];
  }

  checkSec(panel) {
    if (panel == '.B1') {
      this.sections = ['.topleft', '.topright', '.botleft', '.botright'];
    } else if (panel == '.B2') {
      this.sections = ['.topleft', '.topright', '.botleft', '.botright', '.botmid', '.topmid'];
    } else {
      console.log("Invalid panel");
    }
  }
  hideAllSecExceptAndEnlarge(not, panel) {
    this.checkSec(panel);
    for (let i = 0; i < this.sections.length; i++) {
      if (this.sections[i] == not) {
        $(`${panel} .sections ${this.sections[i]}`).addClass('enlarged');
        $(`${panel} .sections button`).hide();
        $(`${panel} .sections .infolabel`).hide();
        $(`${panel} .sections .infotext`).show();
        $(`${panel} .sections .boxtitle`).show();
        setTimeout(function(){$(`${panel} .sections .compvideo`).fadeIn();}, 300);
      } else if (this.sections[i] !== not) {
        $(`${panel} .sections ${this.sections[i]}`).hide();
        $(`${panel} .sections ${this.sections[i]}`).removeClass('enlarged');
      }
    }
    setTimeout(function() {
      $(`${panel} .sections .closeSec`).fadeIn(500);
    }, 1000);
  }
  showAllSec(panel) {
    this.checkSec(panel);
    for (let i = 0; i < this.sections.length; i++) {
      $(`${panel} .sections ${this.sections[i]}`).removeClass('enlarged');
      $(`${panel} .sections button`).show();
      $(`${panel} .sections .infolabel`).show();
      $(`${panel} .sections .infotext`).hide();
      $(`${panel} .sections .boxtitle`).hide();
      $('.compvideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
      $(`${panel} .sections .compvideo`).hide();
      $(`${panel} .sections ${this.sections[i]}`).show();
    }
  }
}

// classes for b3 section
let dropdownleftopen = false;
let dropdownrightopen = false;
class dropdownMan {
  constructor(panel, outputarea) {
    this.panel = panel;
    this.outputarea = outputarea;
    this.titleOptions = {
      strings: [" ", ""],
      typeSpeed: 20,
      backSpeed: 20,
      showCursor: false,
      onComplete: (self) => {
        this.optionSelected = false;
      }
    };
    this.textOptions = {
      strings: [" ", ""],
      typeSpeed: 40,
      backSpeed: 3,
      showCursor: false,
      onComplete: (self) => {
        this.optionSelected1 = false;
      }
    };
    this.titleTyped;
    this.textTyped;
    this.optionSelected = false;
    this.optionSelected1 = false;
  }

  handleChoice(selected, section, title, output) {
    $(`${this.panel} ${section} .dropdown .dropmenu .dropsel${selected}`).click(() => {
      if (!this.optionSelected && !this.optionSelected1) {
        let editedTitle = title.split('').join('\xa0').toUpperCase();
        this.titleOptions.strings[1] = editedTitle;
        this.textOptions.strings[1] = output;
        this.titleTyped = new Typed(this.outputarea[0], this.titleOptions);
        this.textTyped = new Typed(this.outputarea[1], this.textOptions);
        this.optionSelected = true;
        this.optionSelected1 = true;
        if (section == '.left') {
          setTimeout(function() {
            $('.B3 .left .dropdown .dropmenu .dropsel').removeClass('fadeInDown');
            $('.B3 .left .dropdown .dropmenu .dropsel').addClass('fadeOutUp');
            $('.B3 .left .dropdown .dropmenu .dropsel').fadeOut(1500);
            $('.B3 .left .dropdown .droplabel img').removeClass('flip180');
            $('.B3 .left .dropdown .droplabel img').addClass('unflip180');
          }, 500);
          dropdownleftopen = false;
        } else if (section == '.right') {
          setTimeout(function() {
            $('.B3 .right .dropdown .dropmenu .dropsel').removeClass('fadeInDown');
            $('.B3 .right .dropdown .dropmenu .dropsel').addClass('fadeOutUp');
            $('.B3 .right .dropdown .dropmenu .dropsel').fadeOut(1500);
            $('.B3 .right .dropdown .droplabel img').removeClass('flip180');
            $('.B3 .right .dropdown .droplabel img').addClass('unflip180');
            dropdownrightopen = false;
          }, 500);
        }
      }
    });
  }
}
