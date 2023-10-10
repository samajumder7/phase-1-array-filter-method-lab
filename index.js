
function findMatching(roster, naam){
 //   console.log(roster);
    const matches = roster.filter( function (driver){
        //console.log("in FM's CB: ", driver, naam);
        return (driver.toUpperCase() === naam.toUpperCase());
    });
 //   console.log(matches);
    return matches;
}
function fuzzyMatch(roster, naam){
 //   console.log(roster);
    const matches = roster.filter(function (driver){
        let lookFor = naam.toUpperCase();
        let lookIn = driver.toUpperCase();
        return (lookIn.search(lookFor) === 0);
    });
 //   console.log(naam, "could be: ", matches);
    return matches;
}

function matchName(roster, naam){
   //  console.log(roster);
     const matches = roster.filter( function (driver){
    //  console.log("in FM's CB: ", driver, naam);
        return (driver.name.toUpperCase() === naam.toUpperCase());
    });
 //   console.log(matches);
    return matches;
}
