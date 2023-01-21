// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack = () => {
        return this.strength;
    }
    receiveDamage = (damage) => {
        this.health = this.health - damage
    }
};

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage = (damage) => {
        
        this.health = this.health - damage
        if ( this.health !== 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry = () => {
        return "Odin Owns You All!"
    }
};

// Saxon
class Saxon extends Soldier{
    constructor (health, strength) {
        super(health, strength)

    }
    receiveDamage = (damage) => {
        this.health = this.health - damage
        if ( this.health !== 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
};

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking = ( Viking ) => {
        this.vikingArmy.push(Viking);
    };
    addSaxon = ( Saxon ) => {
        this.saxonArmy.push(Saxon);
    };
    vikingAttack = ( ) => {
        let ramdomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let ramdomViking = Math.floor(Math.random() * this.vikingArmy.length);

        for (let i = 0; i < this.saxonArmy.length; i++) {
            if ( this.saxonArmy[i].health <= 0 ) {
                this.saxonArmy.splice(this.saxonArmy[i], 1);
            }
        };

        return this.saxonArmy[ramdomSaxon].receiveDamage(this.vikingArmy[ramdomViking].strength);
    };
    saxonAttack = ( ) => {
        let ramdomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let ramdomViking = Math.floor(Math.random() * this.vikingArmy.length);

        for (let i = 0; i < this.vikingArmy.length; i++) {
            if ( this.vikingArmy[i].health <= 0 ) {
                this.vikingArmy.splice(this.vikingArmy[i], 1);
            }
        };

        return this.vikingArmy[ramdomViking].receiveDamage(this.saxonArmy[ramdomSaxon].strength);
        
    };
    showStatus = ( ) => {
        if (this.saxonArmy.length === 0 ){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Saxons have fought for their lives and survived another day..."
        }
    }
}
