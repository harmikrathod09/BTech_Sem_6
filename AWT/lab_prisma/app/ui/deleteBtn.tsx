"use client"

import React, { useState } from 'react'
import { deleteUser } from '../actions/deleteUser'

export default function DeleteBtn({ id }: { id: number }) {
    const [isDeleting, setIsDeleting] = useState(false)

    const handleDelete = async () => {
        // Confirmation dialog
        const confirmed = window.confirm('Are you sure you want to delete this user?')
        
        if (!confirmed) return

        try {
            setIsDeleting(true)
            await deleteUser(id)
        } catch (error) {
            console.error('Error deleting user:', error)
            alert('Failed to delete user. Please try again.')
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <button 
            onClick={handleDelete}
            className="btn btn-sm btn-danger"
            disabled={isDeleting}
        >
            {isDeleting ? (
                <>
                    <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                    Deleting...
                </>
            ) : (
                'Delete'
            )}
        </button>
    )
}