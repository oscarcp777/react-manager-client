import React from 'react';
import sematable from 'sematable';
import PropTypes from 'prop-types';
import {isEmpty} from  'lodash'
import SortableHeader from '../Users/SortableHeader'
import {LOCATIONS_TABLE} from '../../../actions/types'

const columns = [
    {
        key: 'code',
        primaryKey: true,
        header: 'Code',
        searchable: true,
        sortable: true,
    }, {
        key: 'name',
        header: 'Name',
        searchable: true,
        sortable: true,
    }, {
        key: 'firstLine',
        header: 'Location',
        searchable: true,
        sortable: true,
    }
    , {
        key: 'secondLine',
        header: 'secondLine',
        searchable: true,
        sortable: false
    }
    , {
        key: 'city',
        header: 'city',
        searchable: true,
        sortable: false
    }
    , {
        key: 'state',
        header: 'state',
        searchable: true,
        sortable: false
    }
    , {
        key: 'postCode',
        header: 'postCode',
        searchable: true,
        sortable: false
    }
];
const configs = {
    showFilter: true,
    showPageSize: false,
    sortDirection: 'asc'
}

const LocationsTable = (props) =>{
        const {
            headers: {
                code,
                name,
                firstLine
            },
            data
        } = props;
        return (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <SortableHeader {...code} />
                            <SortableHeader {...name} />
                            <SortableHeader {...firstLine} />
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                      {isEmpty(data)
                        ? <tr>
                           <td colSpan="3">
                             <div className="td-message">
                              <h1><i className="fa fa-map-marker"></i> </h1>
                              <h6>Press {'\u00A0'} <i className="icon-plus fa-lg"></i> {'\u00A0'} to add a location</h6>
                             </div>
                           </td>
                          </tr>
                        : data.map((loc) => (
                          <tr key={loc.code}>
                            <td >{loc.code}</td>
                            <td >{loc.name}</td>
                            <td >{`${loc.firstLine}, ${loc.secondLine}, ${loc.city}, ${loc.state}, ${loc.postCode}`}</td>
                            <td >
                              <button className="btn btn-primary" type="button">
                                View
                              </button>
                          </td>
                          </tr>
                        ))}
                    </tbody>
                </table>

        );
    }

LocationsTable.propTypes = {
  data: PropTypes.array.isRequired
};
export default sematable(LOCATIONS_TABLE, LocationsTable, columns, configs);
