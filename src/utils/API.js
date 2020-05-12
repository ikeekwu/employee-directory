import axios from 'axios'
const URL = "https://randomuser.me/api/?results=200&nat=us";

export default {
    search: function() {
        return new Promise((resolve, reject) => {
            axios.get(URL).then(res => {
                var results = res.data.results;
                
                var newData = results.map( x => {
                    return {
                        name: `${x.name.first} ${x.name.last}`,
                        location: `${x.location.state}`,
                        age: `${x.dob.age}`,
                        number: `${x.cell}`,
                        country: `${x.nat}`
                    }
                })

                resolve(newData);
            })
        })
    }
}