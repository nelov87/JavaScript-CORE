function heroicInventory(input) {
    let heroData = [];

    for (let i = 0; i < input.length; i++){
        let curentHeroArguments = input[i].split(' / ');
        let curentHeroName = curentHeroArguments[0];
        let curenHeroLevel = Number(curentHeroArguments[1]);
        let curentHeroItems = [];

        if(curentHeroArguments.length > 2){
           curentHeroItems = curentHeroArguments[2].split(', ');
        }

        let hero = {
          name: curentHeroName,
          level: curenHeroLevel,
          items: curentHeroItems
        };

        heroData.push(hero);

    }

    console.log(JSON.stringify(heroData));
}

heroicInventory();