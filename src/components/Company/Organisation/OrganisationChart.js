import React, {Component} from 'react';
import OrgChart from './orgchart';
import cloneDeep from 'lodash/cloneDeep';

class OrganisationChart extends Component {

    componentDidUpdate(prevProps) {
        const {usersOrg} = this.props;
        this.paintOrgChart(cloneDeep(usersOrg));
    }

    paintOrgChart(usersOrg) {
        setTimeout(() => {
          document.getElementById("chart-container").innerHTML = "";
            new OrgChart({
                'chartContainer': '#chart-container',
                'data': usersOrg,
                'nodeContent': 'title',
                'toggleSiblingsResp': true,
                'draggable': true,
                'nodeID': 'id',
                'createNode': (node, data) => {
                    let secondMenuIcon = document.createElement('i'),
                        secondMenu = document.createElement('div');

                    secondMenuIcon.setAttribute('class', 'fa  fa-user-circle-o second-menu-icon');
                    secondMenuIcon.addEventListener('click', (event) => {
                        event.target.nextElementSibling.classList.toggle('hidden');
                    });
                    secondMenu.setAttribute('class', 'second-menu hidden');
                    secondMenu.innerHTML = `<img class="avatar" src="/img/avatars/6.jpg">`;
                    node.appendChild(secondMenuIcon)
                    node.appendChild(secondMenu);
                },
                'dropCriteria': (draggedNode, dragZone, dropZone) => {
                    if (draggedNode.querySelector(':scope > .content').textContent.includes('manager') && dropZone.querySelector(':scope > .content').textContent.includes('engineer')) {
                        return false;
                    }
                    return true;
                }
            });

        }, 0);
    }

    render() {

        return (
            <div >
                <div id="chart-container"></div>
            </div>
        );
    }

}

export default OrganisationChart;
