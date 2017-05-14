import React, { Component, PropTypes } from 'react';

const propTypes = {
  sortKey: PropTypes.string.isRequired,
  name: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
  sorted: PropTypes.string,
  title: PropTypes.string,
};

class SortableHeader extends Component {
  render() {
    const {
      sortKey,
      name,
      sorted,
      title,
      handleClick,
      className
    } = this.props;
    return (
      <th
        className={className}
        data-key={sortKey}
        data-toggle={title ? 'tooltip' : ''}
        style={{
          cursor: 'pointer',
        }}
        title={title}
        onClick={() => handleClick(sortKey)}
      >
        <span style={{ marginRight: '5px' }}>
          {name}
        </span>
        {sorted === 'asc' && <i className="fa fa-caret-up" />}
        {sorted === 'desc' && <i className="fa fa-caret-down" />}
        {sorted === null && <i className="fa fa-sort" />}
      </th>
    );
  }
}

SortableHeader.propTypes = propTypes;
export default SortableHeader;
