function solution(input) {
    switch (input){
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
        case 'score':
            let currentUpVotes = this.upvotes;
            let currentDownVotes = this.downvotes;
            let rating = 'new';
            if(currentDownVotes + currentUpVotes >= 10){
                if(currentUpVotes > 0.66 * (currentUpVotes + currentDownVotes)){
                    rating = 'hot'
                }else if (currentDownVotes > 100 || currentUpVotes > 100){
                    rating = 'controversial'
                }else if(currentDownVotes > currentUpVotes){
                    rating = 'unpopular'
                }
            }
            if (currentUpVotes + currentDownVotes > 50){
                let modifier = Math.ceil(0.25 * Math.max(currentUpVotes,currentDownVotes))
                currentDownVotes += modifier;
                currentUpVotes += modifier;
            }
            let score = currentUpVotes - currentDownVotes;
            return  [currentUpVotes,currentDownVotes,score,rating]
    }

}
solution.call(post, 'upvote');
solution.call(post, 'downvote');