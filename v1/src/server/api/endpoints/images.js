import fs from 'fs';
import path from 'path';

export default async (req,res,next) => {
  if(req.params.image){
    fs.stat(path.join(`imgs/${req.params.image}`), (err, stat) => {
      if(err == null) {

        res.sendFile(`imgs/${req.params.image}`,{root:'.'});
      } else if(err.code == 'ENOENT') {
        res.json({
          error: 404
        });
      } else {
        res.send('ERROR');
        console.error('error code: ', err.code);
      }
    });
  }

}
