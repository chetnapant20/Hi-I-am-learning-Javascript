
    function getZodiacSign(day, month) {
      const signs = [
        { sign: "Capricorn", lastDay: 19 }, // Jan
        { sign: "Aquarius", lastDay: 18 },  // Feb
        { sign: "Pisces", lastDay: 20 },    // Mar
        { sign: "Aries", lastDay: 19 },     // Apr
        { sign: "Taurus", lastDay: 20 },    // May
        { sign: "Gemini", lastDay: 20 },    // Jun
        { sign: "Cancer", lastDay: 22 },    // Jul
        { sign: "Leo", lastDay: 22 },       // Aug
        { sign: "Virgo", lastDay: 22 },     // Sep
        { sign: "Libra", lastDay: 22 },     // Oct
        { sign: "Scorpio", lastDay: 21 },   // Nov
        { sign: "Sagittarius", lastDay: 21 } // Dec
      ];

      return (day <= signs[month - 1].lastDay) ? 
        signs[month - 1].sign : 
        (month === 12 ? "Capricorn" : signs[month].sign);
    }

    const compliments = [
      "You're a genuinely good human being.",
      "You make people around you feel valued.",
      "Your kindness is contagious.",
      "You have a wise and thoughtful presence.",
      "You handle challenges with grace.",
      "Your creativity brightens other people's days.",
      "You listen with empathy and attention.",
      "You bring out the best in others.",
      "Your honesty is refreshing and rare.",
      "You have a calm strength that matters.",
      "You're courageous in the ways that count.",
      "You have a great sense of perspective.",
      "Your sense of humor is a gift.",
      "You show up for people in meaningful ways.",
      "You are thoughtful and dependable.",
      "You inspire others by example.",
      "Your generosity makes a real difference.",
      "You have a beautifully curious mind.",
      "You make difficult things feel possible.",
      "You're exactly the kind of person the world needs.",
    ];

    const victimCardToYou = [
      "You always let people use you.",
      "Everyone only reaches out to you when they need something.",
      "You give so much and get nothing back.",
      "People take advantage of your kindness.",
      "You're always the one left holding the bag.",
      "You get blamed even when it wasn't your fault.",
      "Nobody really listens to how you feel.",
      "You sacrifice a lot and no one notices.",
      "You end up doing everyone else's work.",
      "People treat you like a backup plan.",
      "You're always the one who gets ignored.",
      "You try so hard and it's never acknowledged.",
      "Others walk all over you without consequence.",
      "You always apologize even when you shouldn't have to.",
      "People drain your energy and never refill it.",
      "You keep getting used and it wears you down.",
      "You always make room for others and forget yourself.",
      "You're the easy target for complaints and blame.",
      "People expect you to fix everything for them.",
      "You end up feeling alone even in a crowd.",
    ];

    const motivationalSuggestions = [
      "If you work hard and stay focused, you will achieve your dreams.",
      "If you treat others with kindness, you will earn respect and love in return.",
      "If you keep learning and improving, you will unlock new opportunities.",
      "If you stay disciplined and consistent, success will naturally follow.",
      "If you stay patient and persistent, even the toughest challenges will pass.",
      "If you believe in yourself, others will start believing in you too.",
      "If you face your fears with courage, you will grow stronger every time.",
      "If you keep a positive attitude, you will attract positivity into your life.",
      "If you help others succeed, you will also rise higher.",
      "If you never give up, eventually you will win.",
    ];

    const futureVision = [
      "Your future is full of wealth and financial freedom.",
      "You will achieve the career success you’ve always dreamed of.",
      "Your future is bright, filled with opportunities and growth.",
      "You will attract abundance in every area of your life.",
      "Your hard work will lead to recognition and prosperity.",
      "You will create a life of comfort, joy, and security.",
      "Your future holds exciting adventures and new experiences.",
      "You will inspire others with your achievements and vision.",
      "Your future is a reflection of your dedication and focus.",
      "You will live a life where your dreams become reality.",
    ];

    function getAstrology() {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const day = parseInt(document.getElementById("day").value);
      const month = parseInt(document.getElementById("month").value);
      const year = parseInt(document.getElementById("year").value);

      if (!firstName || !lastName || !day || !month || !year) {
        document.getElementById("result").innerText = `⚠️ Please fill all fields! / The details are not filled properly`;
        return;
      }

      const zodiac = getZodiacSign(day, month);
      let index = (day*month*year)%20;      const compliment = compliments[index];
      const victim = victimCardToYou[index];
      index = (day+month)%10
      const motivation = motivationalSuggestions[index];
      const future = futureVision[index];
      document.getElementById("result").innerText =
        `✨ Hello ${firstName}. Your zodiac sign is ${zodiac}! 🌙  
        It feels like ${victim}.   ${motivation}.  ${future}
        `;
    }

    const button = document.querySelector('button')

button.addEventListener('click',getAstrology)
