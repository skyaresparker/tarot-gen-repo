
export const Deck = (function(){
    const card = [
        //majors
        {
            arcana: "major",
            label: "The Fool",
            cardNum: 0,
            readings: {
                light: [`Take the risk but watch your step.`],
                dark: [`There are things you need to address.`]
            }
        },
        {
            arcana: "major",
            label: "The Magician",
            cardNum: 1,
            readings: {
                light: [`You have what you need.`],
                dark: [`Out of touch with reality.`]
            }
        },
        {
            arcana: "major",
            label: "The High Priestess",
            cardNum: 2,
            readings: {
                light: [`Listen to your intuition not emotion or logic.`],
                dark: [`Something is blocking your higher self.`]
            }
        },
        {
            arcana: "major",
            label: "The Empress",
            cardNum: 3,
            readings: {
                light: [`You're a compassionate, nurturing peacekeeper.`],
                dark: [`There is domestic disharmony.`]
            }
        },
        {
            arcana: "major",
            label: "The Emperor",
            cardNum: 4,
            readings: {
                light: [`Discipline and obeying the rules.`],
                dark: [`Being irresponsible.`]
            }
        },
        {
            arcana: "major",
            label: "The Heirophant",
            cardNum: 5,
            readings: {
                light: [`Pursuit of traditional knowledge.`],
                dark: [`Think outside the box.`]
            }
        },
        {
            arcana: "major",
            label: "The Lovers",
            cardNum: 6,
            readings: {
                light: [`	Someone loves you, but you may want to make a different choice.`],
                dark: [`Temporary romantic breakup.`]
            }
        },
        {
            arcana: "major",
            label: "The Chariot",
            cardNum: 7,
            readings: {
                light: [`Get in the Drivers seat.`],
                dark: [`Delayed journey.`]
            }
        },
        {
            arcana: "major",
            label: "Strength",
            cardNum: 8,
            readings: {
                light: [`Use honey not vinegar.`],
                dark: [`Arguments.`]
            }
        },
        {
            arcana: "major",
            label: "The Hermit",
            cardNum: 9,
            readings: {
                light: [`Take time alone to think.`],
                dark: [`Need more social interaction.`]
            }
        },
        {
            arcana: "major",
            label: "Wheel of Fortune",
            cardNum: 10,
            readings: {
                light: [`Things are changing fast around you.`],
                dark: [`A setback requires you to rethink your original plan.`]
            }
        },
        {
            arcana: "major",
            label: "Justice",
            cardNum: 11,
            readings: {
                light: [`Treat people fairly and you will be treated fairly.`],
                dark: [`A feeling of being cheated out of something.`]
            }
        },
        {
            arcana: "major",
            label: "The Hanged Man",
            cardNum: 12,
            readings: {
                light: [`A sacrifice.`],
                dark: [`Don't be stubborn.`]
            }
        },
        {
            arcana: "major",
            label: "Death",
            cardNum: 13,
            readings: {
                light: [`Accept the end of a situation.`],
                dark: [`Baggage keeps you from moving forward.`]
            }
        },
        {
            arcana: "major",
            label: "Temperance",
            cardNum: 14,
            readings: {
                light: [`Caution.`],
                dark: [`Waste.`]
            }
        },
        {
            arcana: "major",
            label: "The Devil",
            cardNum: 15,
            readings: {
                light: [`Sexual desire and passion.`],
                dark: [`Victory over your emotions.`]
            }
        },
        {
            arcana: "major",
            label: "The Tower",
            cardNum: 16,
            readings: {
                light: [`A setback causes need to rebuild.`],
                dark: [`You need to strengthen your foundation.`]
            }
        },
        {
            arcana: "major",
            label: "The Star",
            cardNum: 17,
            readings: {
                light: [`Healing and rebirth is directly ahead.`],
                dark: [`Lack of faith, illness.`]
            }
        },
        {
            arcana: "major",
            label: "The Moon",
            cardNum: 18,
            readings: {
                light: [`Don't be deceived.`],
                dark: [`Mental health issues.`]
            }
        },
        {
            arcana: "major",
            label: "The Sun",
            cardNum: 19,
            readings: {
                light: [`A wonderful experience is ahead of you.`],
                dark: [`Low energy.`]
            }
        },
        {
            arcana: "major",
            label: "Judgment",
            cardNum: 20,
            readings: {
                light: [`You need to listen more.`],
                dark: [`Don't run away from your feelings.`]
            }
        },
        {
            arcana: "major",
            label: "The World",
            cardNum: 21,
            readings: {
                light: [`Freedom to choose a new path.`],
                dark: [`Low self esteem.`]
            }
        },
        // Wands
        {
            arcana: "minor",
            label: "Ace of Wands",
            element: "Fire",
            readings: {
                light: [`An exciting possibility. Accept what is offered.`],
                dark: [`Idea won't take hold, back to drawing board.`]
            }
        },
        {
            arcana: "minor",
            label: "Two of Wands",
            element: "Fire",
            readings: {
                light: [`Completion of contracts and partnership commitments.`],
                dark: [`Loss of faith.`]
            }
        },
        {
            arcana: "minor",
            label: "Three of Wands",
            element: "Fire",
            readings: {
                light: [`Explore a new path.`],
                dark: [`Don't whine or blame others.`]
            }
        },
        {
            arcana: "minor",
            label: "Four of Wands",
            element: "Fire",
            readings: {
                light: [`Marriage or acceptance by friends and family.`],
                dark: [`Upcoming event will need more help than anticipated.`]
            }
        },
        {
            arcana: "minor",
            label: "Five of Wands",
            element: "Fire",
            readings: {
                light: [`Competition.`],
                dark: [`Conflict can be beneficial.`]
            }
        },
        {
            arcana: "minor",
            label: "Six of Wands",
            element: "Fire",
            readings: {
                light: [`Victory.`],
                dark: [`Be patient, success may be delayed.`]
            }
        },
        {
            arcana: "minor",
            label: "Seven of Wands",
            element: "Fire",
            readings: {
                light: [`You feel defensive but you are in a strong position to confront fears and obstacles.`],
                dark: [`Others may be intimidated by you, tone it down.`]
            }
        },
        {
            arcana: "minor",
            label: "Eight of Wands",
            element: "Fire",
            readings: {
                light: [`Making Progress on the right track.`],
                dark: [`Things are moving forward without you, do you feel left out?`]
            }
        },
        {
            arcana: "minor",
            label: "Nine of Wands",
            element: "Fire",
            readings: {
                light: [`Look around, protect yourself and your possessions.`],
                dark: [`Paranoia.`]
            }
        },
        {
            arcana: "minor",
            label: "Ten of Wands",
            element: "Fire",
            readings: {
                light: [`Don't burn out on responsibilities.`],
                dark: [`Show appreciation in order to get more help.`]
            }
        },
        {
            arcana: "minor",
            label: "Page of Wands",
            element: "Fire",
            readings: {
                light: [`Restless.`],
                dark: [`Don't be pessimistic or a victim.`]
            }
        },
        {
            arcana: "minor",
            label: "Knight of Wands",
            element: "Fire",
            readings: {
                light: [`Moving house or job.`],
                dark: [`Feeling insecure and stuck in a situation.`]
            }
        },
        {
            arcana: "minor",
            label: "Queen of Wands",
            element: "Fire",
            readings: {
                light: [`Needing attention.`],
                dark: [`Acts undependable, not wanting anyone to become dependent.`]
            }
        },
        {
            arcana: "minor",
            label: "King of Wands",
            element: "Fire",
            readings: {
                light: [`Need to understand people first.`],
                dark: [`In awkward situation, may be wise to retreat.`]
            }
        },
        // Cups
        {
            arcana: "minor",
            label: "Ace of Cups",
            element: "Water",
            readings: {
                light: [`New love.`],
                dark: [`Relationship is not meeting your needs.`]
            }
        },
        {
            arcana: "minor",
            label: "Two of Cups",
            element: "Water",
            readings: {
                light: [`Perfect understanding between two people.`],
                dark: [`Not enough chemistry in the relationship.`]
            }
        },
        {
            arcana: "minor",
            label: "Three of Cups",
            element: "Water",
            readings: {
                light: [`Friendship.`],
                dark: [`Someone is unfaithful.`]
            }
        },
        {
            arcana: "minor",
            label: "Four of Cups",
            element: "Water",
            readings: {
                light: [`You don't like your choices.`],
                dark: [`Reason to hope.`]
            }
        },
        {
            arcana: "minor",
            label: "Five of Cups",
            element: "Water",
            readings: {
                light: [`Don't overlook opportunities.`],
                dark: [`Need to recover from emotional wounds.`]
            }
        },
        {
            arcana: "minor",
            label: "Six of Cups",
            element: "Water",
            readings: {
                light: [`Happiness from someone in your past or at a distance.`],
                dark: [`Bitter memories.`]
            }
        },
        {
            arcana: "minor",
            label: "Seven of Cups",
            element: "Water",
            readings: {
                light: [`Need to prioritize.`],
                dark: [`Indecision.`]
            }
        },
        {
            arcana: "minor",
            label: "Eight of Cups",
            element: "Water",
            readings: {
                light: [`Look for greener pastures.`],
                dark: [`Inability to leave a bad situation.`]
            }
        },
        {
            arcana: "minor",
            label: "Nine of Cups",
            element: "Water",
            readings: {
                light: [`Satisfaction.`],
                dark: [`Discontent, unfulfilled.`]
            }
        },
        {
            arcana: "minor",
            label: "Ten of Cups",
            element: "Water",
            readings: {
                light: [`Domestic harmony.`],
                dark: [`Be satisfied and stop seeking a better situation.`]
            }
        },
        {
            arcana: "minor",
            label: "Page of Cups",
            element: "Water",
            readings: {
                light: [`Social invitation.`],
                dark: [`Childish behavior.`]
            }
        },
        {
            arcana: "minor",
            label: "Knight of Cups",
            element: "Water",
            readings: {
                light: [`Romantic invitation or emotional move.`],
                dark: [`Deception, lack of motivation and even emotional problems.`]
            }
        },
        {
            arcana: "minor",
            label: "Queen of Cups",
            element: "Water",
            readings: {
                light: [`Do not deny your emotions.`],
                dark: [`Shallow behavior.`]
            }
        },
        {
            arcana: "minor",
            label: "King of Cups",
            element: "Water",
            readings: {
                light: [`Control your emotions.`],
                dark: [`Being seen as untrustworthy.`]
            }
        },
        // Swords
        {
            arcana: "minor",
            label: "Ace of Swords",
            element: "Air",
            readings: {
                light: [`New idea or career.`],
                dark: [`Confusion, infatuation.`]
            }
        },
        {
            arcana: "minor",
            label: "Two of Swords",
            element: "Air",
            readings: {
                light: [`Set strong boundaries with others.`],
                dark: [`Relationship can be revived.`]
            }
        },
        {
            arcana: "minor",
            label: "Three of Swords",
            element: "Air",
            readings: {
                light: [`Prepare for disappointment or broken heart ahead if you don't make changes.`],
                dark: [`Petty quarrels. Healing.`]
            }
        },
        {
            arcana: "minor",
            label: "Four of Swords",
            element: "Air",
            readings: {
                light: [`Rest, do not take action at this time.`],
                dark: [`Need for action.`]
            }
        },
        {
            arcana: "minor",
            label: "Five of Swords",
            element: "Air",
            readings: {
                light: [`Its not all about you. Care for others.`],
                dark: [`Backstabbing or an argument with no winner.`]
            }
        },
        {
            arcana: "minor",
            label: "Six of Swords",
            element: "Air",
            readings: {
                light: [`Travel.`],
                dark: [`Delays in progress.`]
            }
        },
        {
            arcana: "minor",
            label: "Seven of Swords",
            element: "Air",
            readings: {
                light: [`Secretive, afraid of being trapped, may take wrong action.`],
                dark: [`Someone needs encouragement.`]
            }
        },
        {
            arcana: "minor",
            label: "Eight of Swords",
            element: "Air",
            readings: {
                light: [`You feel trapped, you can seek help.`],
                dark: [`Freedom will come.`]
            }
        },
        {
            arcana: "minor",
            label: "Nine of Swords",
            element: "Air",
            readings: {
                light: [`Anxiety. What you imagine is worse than the reality.`],
                dark: [`No need for change. Accept your situation.`]
            }
        },
        {
            arcana: "minor",
            label: "Ten of Swords",
            element: "Air",
            readings: {
                light: [`Betrayal or end to relationship or job but pick yourself up.`],
                dark: [`You will get a second chance.`]
            }
        },
        {
            arcana: "minor",
            label: "Page of Swords",
            element: "Air",
            readings: {
                light: [`Stand your ground.`],
                dark: [`Critical questions need to be answered.`]
            }
        },
        {
            arcana: "minor",
            label: "Knight of Swords",
            element: "Air",
            readings: {
                light: [`Overcome fear and take action even if out of your comfort zone.`],
                dark: [`A troublemaker.`]
            }
        },
        {
            arcana: "minor",
            label: "Queen of Swords",
            element: "Air",
            readings: {
                light: [`Get more involved.`],
                dark: [`Need soft understanding approach (feminine).`]
            }
        },
        {
            arcana: "minor",
            label: "King of Swords",
            element: "Air",
            readings: {
                light: [`Trying to analyze too much.`],
                dark: [`Strict controlling behavior.`]
            }
        },
        // Pentacles
        {
            arcana: "minor",
            label: "Ace of Pentacles",
            element: "Earth",
            readings: {
                light: [`Financial opportunity, job or increased pay.`],
                dark: [`Feeling of loss or actual loss.`]
            }
        },
        {
            arcana: "minor",
            label: "Two of Pentacles",
            element: "Earth",
            readings: {
                light: [`Find balance.`],
                dark: [`Need to concentrate on just one thing.`]
            }
        },
        {
            arcana: "minor",
            label: "Three of Pentacles",
            element: "Earth",
            readings: {
                light: [`Recognition.`],
                dark: [`Need to bring people together to resolve something.`]
            }
        },
        {
            arcana: "minor",
            label: "Four of Pentacles",
            element: "Earth",
            readings: {
                light: [`Clinging too much (let go).`],
                dark: [`Feeling of jealousy.`]
            }
        },
        {
            arcana: "minor",
            label: "Five of Pentacles",
            element: "Earth",
            readings: {
                light: [`Left to struggle in the cold but not alone.`],
                dark: [`Loneliness is resolved through inner work.`]
            }
        },
        {
            arcana: "minor",
            label: "Six of Pentacles",
            element: "Earth",
            readings: {
                light: [`Be generous.`],
                dark: [`Feeling of arrogance, not needing anyone.`]
            }
        },
        {
            arcana: "minor",
            label: "Seven of Pentacles",
            element: "Earth",
            readings: {
                light: [`Don't rest on what you accomplished, still work ahead.`],
                dark: [`Carelessness, scattered thoughts.`]
            }
        },
        {
            arcana: "minor",
            label: "Eight of Pentacles",
            element: "Earth",
            readings: {
                light: [`Quality is important and may be reached with learning new skills.`],
                dark: [`Don't micromanage or be too nearsighted.`]
            }
        },
        {
            arcana: "minor",
            label: "Nine of Pentacles",
            element: "Earth",
            readings: {
                light: [`Self Sufficiency resulting in achievement.`],
                dark: [`Need more self discipline.`]
            }
        },
        {
            arcana: "minor",
            label: "Ten of Pentacles",
            element: "Earth",
            readings: {
                light: [`Mature Relationship.`],
                dark: [`Without Enthusiasm, need more joy.`]
            }
        },
        {
            arcana: "minor",
            label: "Page of Pentacles",
            element: "Earth",
            readings: {
                light: [`Focus on work and finances.`],
                dark: [`Unrealistic expectations.`]
            }
        },
        {
            arcana: "minor",
            label: "Knight of Pentacles",
            element: "Earth",
            readings: {
                light: [`Good news about finances.`],
                dark: [`Don't procrastinate.`]
            }
        },
        {
            arcana: "minor",
            label: "Queen of Pentacles",
            element: "Earth",
            readings: {
                light: [`Faithful relationship.`],
                dark: [`Someone is a martyr.`]
            }
        },
        {
            arcana: "minor",
            label: "King of Pentacles",
            element: "Earth",
            readings: {
                light: [`Material needs are met.`],
                dark: [`Someone you know may not be trustworthy.`]
            }
        }
    ]
    return card;
}())








