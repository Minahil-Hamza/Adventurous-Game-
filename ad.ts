

import inquirer from "inquirer";

class Enemy {
    name: string;
    health = 100;

    constructor(name: string){
        this.name = name;
    }

    decreaseHealth() {
        this.health -= 20;
    }

    increaseHealth() {
        this.health = 100;
    }
}

//step 02:

async function main() {
    const { heroName } = await inquirer.prompt([
        {
            type: "input",
            name: "heroName",
            message: "Enter Your Hero Name:"
        }
    ]);

    //enemey object 
    const { enemyType } = await inquirer.prompt([
        {
            type: "list",
            name: "enemyType",
            choices: ["alien", "witch", "zombie"],
        }
    ]);

    //step 03:
    const hero = { name: heroName, health: 100 };
    const enemy = new Enemy(enemyType);

    console.log(`${enemy.name} v/s ${hero.name}`);

    //step 04:

    do {
        const { action } = await inquirer.prompt([
            //action object
            {
                type: "list",
                name: "action",
                choices: ["attack", "defend", "range target", "run"],
                message: "choose the attack type to perform action",

            }
        ]);

        //step 05: switch case
        switch (action) {
            case "attack":
                const randomNum = Math.random();
                if (randomNum > 0.5) {
                    hero.health -= 20;
                    console.log(`${hero.name} health: ${hero.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                    if (hero.health <=0) {
                        console.log("you loss! try again");
                        return;
                    }
                } else {
                    //enemy health decrease
                    enemy.health -= 20;
                    console.log(`${hero.name} health: ${hero.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                    if (enemy.health <= 0) {
                        console.log("congratulations! you won");
                        return;
                    }
                }
                break;
        }
    } while(true);
}

main();
