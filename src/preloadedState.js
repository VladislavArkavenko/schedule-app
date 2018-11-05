import uuidv4 from 'uuid/v4';

const preloadedState = [
        {
            id: uuidv4() ,
            subject: 'Computer science',
            teacher: 'Shemsidinov T.G.',
            room : 342
        },{
            id: uuidv4() ,
            subject: 'Euclid`s geometry',
            teacher: 'Pavlov V.D.',
            room : 202
        },{
            id: uuidv4() ,
            subject: 'Architecture',
            teacher: 'Gorbatyk A.V.',
            room : 25
        }, {
            id: uuidv4() ,
            subject: 'Physical training',
            teacher: 'Shepelev K.A.',
            room : 116
        }
    ]


export default preloadedState;