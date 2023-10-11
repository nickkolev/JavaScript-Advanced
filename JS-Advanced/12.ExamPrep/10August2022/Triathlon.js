class Triathlon {
    constructor(competitionName ) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if(this.participants[participantName] === undefined) {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        } else {
            return `${participantName} has already been added to the list`;
        }
    }

    completeness(participantName, condition) {
        if(this.participants[participantName] === undefined) {
            throw new Error(`${participantName} is not in the current participants list`);
        } else {
            if (condition < 30) {
                throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
            } 
            
            let completedDisciplines = Math.floor(condition / 30);
            if (completedDisciplines > 0 && completedDisciplines < 3) {
                return `${participantName} could only complete ${completedDisciplines} of the disciplines`;
            } else if (completedDisciplines === 3) { 
                let participantGender = this.participants[participantName];
                this.listOfFinalists.push({
                    name: participantName,
                    gender: participantGender,
                });
                return `Congratulations, ${participantName} finished the whole competition`;
            }
        }
    }

    rewarding(participantName) {
        if(this.listOfFinalists.find(p => p.name === participantName)) {
            return `${participantName} was rewarded with a trophy for his performance`;
        } else {
            return `${participantName} is not in the current finalists list`;
        }
    }

    showRecord(criteria) {
        if(this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`;
        }

        if (criteria === "male" || criteria === "female") {
            let finalistsByGender = this.listOfFinalists.filter(
              (finalist) => finalist.gender === criteria
            );
            if (finalistsByGender.length === 0) {
              return `There are no ${gender} finalists`;
            } else {
              return `${finalistsByGender[0].name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            }
          } else if (criteria === "all") {
            let sortedFinalists = this.listOfFinalists.sort((a, b) =>
              a.name.localeCompare(b.name)
            );
            let result = [`List of all ${this.competitionName} finalists:`];
            sortedFinalists.forEach((finalist) => {
              result.push(`${finalist.name}`);
            });
      
            return result.join("\n");
          }
    }
}

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));

