import { useState } from 'react';

function useDeleteModal() {
    const [isDeleteModalShow, setIsDeleteModalShow] = useState(false);

    const handleModalClose = () => {
        setIsDeleteModalShow(false);
    };

    const handleModalOpen = () => {
        setIsDeleteModalShow(true);
    };

    return {
        isDeleteModalShow,
        handleModalClose,
        handleModalOpen,
    };
}

export default useDeleteModal;
