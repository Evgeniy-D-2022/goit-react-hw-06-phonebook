import { createSlice } from "@reduxjs/toolkit";
import initContacts from '../components/contacts.json';
import { nanoid } from "nanoid";


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: initContacts,
    },
    reducers: {
        addContacts: {
            reducer(state, action) {
                state.contacts.push(action.payload)
            },
            prepare (contact) {
                return {
                    payload: {
                    ...contact, 
                    id: nanoid(),
                }
                }
            }
        },

        deleteContact: {
            reducer(state, action) {
                state.contacts = state.contacts.filter(item => item.id !== item.payload.id)
            }
        }

    }
});

export const { addContacts, deleteContact } = contactsSlice.actions;