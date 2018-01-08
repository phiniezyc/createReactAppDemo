import React from 'react';


import { Button, Icon} from 'react-materialize';

const Push = () => {
	return (
        <div>
		<Button waves='light'>EDIT ME<Icon left>save</Icon> 
        </Button>
        
        <Button floating large className='baseColor' waves='light' icon='add' />

        </div>
	
);
}

export default Push;