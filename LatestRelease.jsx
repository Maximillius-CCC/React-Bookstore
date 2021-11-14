import React from 'react';
import { Card } from 'react-bootstrap'
import scifi from ''
// Can't seem to create import path to JSON file



const LatestRelease = () => {
    console.log(sci-fi)

    return <div className="d-flex flex-wrap">{
        scifi.map(book => {
            // return <img className="book-cover" src={book.img} />
            return <Card className="book-cover">
                < Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>
                        {book.title}
                    </Card.Title>
                </Card.Body>
            </Card>
        })
    }</div >
}

export default LatestRelease
