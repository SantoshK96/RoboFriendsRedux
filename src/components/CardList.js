import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    //--To check Error Boundry
    // if(true){
    //     throw new Error('Oh snap!');
    // }
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;