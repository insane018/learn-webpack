/**
 * Created by 22 on 2017/8/29.
 */
import _ from 'lodash'
import './style.css';
function component () {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello','webpack'],' ');
    element.classList.add('hello');
    return element;
}

document.body.appendChild(component())