import React, { useEffect, Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'
import HamburgerIcon from '../../components/HamburgerIcon/HamburgerIcon'
import Note from '../../components/Note/Note'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAllNotes } from '../../redux/actions/notes'
import { signout } from '../../redux/actions/auth'
import './Main.css'

const Main = ({ notes, getAllNotes, signout }) => {
    const [searchActive, setSearchActive] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const [menuActive, setMenuActive] = useState(false)
    const history = useHistory()

    useEffect(() => {
        getAllNotes()
    }, [getAllNotes])

    const handleSearchClick = () => {
        setSearchActive(!searchActive)
    }

    const handleSearch = (input) => {
        setSearchInput(input)
    }

    const handleMenuClick = () => {
        setMenuActive(!menuActive)
    }

    const handleSignout = () => {
        signout()
    }

    const renderedNotes = () => {
        return notes.map(note => {
            if (note.title.includes(searchInput)) {
                return <Note
                    key={note._id}
                    title={note.title}
                    body={note.body}
                    date={note.updatedAt}
                    id={note._id}
                />
            }
        })
    }

    return (
        <Fragment>
            <div className='notes-main'>
                <div className="heading">
                    <h1>All Notes</h1>
                    <h4>{notes.length} Note(s)</h4>
                </div>
                <div className="icons">
                    <div className="menu" onClick={handleMenuClick}>
                        <HamburgerIcon className='menu-icon icon' />
                        <div className={`menu-dropdown ${menuActive ? 'menu-active' : ''}`}>
                            <p onClick={handleSignout}>Signout</p>
                        </div>
                    </div>
                    <div className="search">
                        <input
                            type='text'
                            className={`search-bar ${searchActive ? 'search-active' : ''}`}
                            placeholder='Search Notes'
                            value={searchInput}
                            onChange={e => handleSearch(e.target.value)}
                        ></input>
                        <i className="fas fa-search search-icon icon" onClick={handleSearchClick}></i>
                    </div>
                </div>
                <div className="notes-section">
                    {renderedNotes()}
                </div>
            </div>
            <div className='circle-btn' onClick={() => history.push('/create-note')}><i className="fas fa-plus"></i></div>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    notes: state.notes.notes,
})

Main.propTypes = {
    getAllNotes: PropTypes.func.isRequired,
    signout: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { getAllNotes, signout })(Main)
