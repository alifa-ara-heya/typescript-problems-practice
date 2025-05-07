{
  /* Define an enum Day for the days of the week.
Create a function that returns "Weekday" or "Weekend" based on the input day. */

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

  //   examples

  console.log(getDayType(Day.Monday));
  console.log(getDayType(Day.Sunday));
  console.log(getDayType(Day.Saturday));
}
