import React from 'react'
import {withStyles} from '@material-ui/core/styles'
const styles = {

}
class Cards extends React.Component {
    render() {
        return(
            
            <div>

<div class="card" >
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Este sera la card</li>
    <li class="list-group-item">que se utilizara</li>
    <li class="list-group-item">examen</li>
  </ul>
</div>
<div>

<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
</div>
            </div>
        )
    }
}

export default withStyles(styles)(Cards)