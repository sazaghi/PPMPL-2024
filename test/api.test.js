import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';

describe('API Testing', () => {
    it('should return all items', (done) => {
        request(app)
            .get('/api/item')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('array');
                expect(res.body.length).to.be.at.least(1);
                done();
            });
    });

    it('should create a new item', (done) => {
        const newItem = { name: 'Item 3' };
        request(app)
            .post('/api/item')
            .send(newItem)
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body).to.have.property('id');
                expect(res.body).to.have.property('name', 'Item 3');
                done();
            });
    });

    it('should update an existing item', (done) => {
        const updatedItem = { name: 'Updated Item 1' };
        request(app)
            .put('/api/item/1') // Updating the item with id 1
            .send(updatedItem)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.have.property('id', 1);
                expect(res.body).to.have.property('name', 'Updated Item 1');
                done();
            });
    });

    it('should delete an item', (done) => {
        request(app)
            .delete('/api/item/1') // Deleting the item with id 1
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.have.property('message', 'Item has been deleted');
                done();
            });
    });
});
