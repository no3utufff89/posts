import { useEffect } from 'react';
import './App.scss'
import { useAppDispatch, useAppSelector, useModalstatusChange } from './store/hooks'
import { getAllPosts } from './store/slices/postsSlice/requests';
import { PostsList } from './components/PostsList/PostsList';
import { useSelector } from 'react-redux';
import { getModalType, isModalActive } from './store/slices/settingsSlice/settingsSlice';
import Modal from './components/Modal/Modal/Modal';
import { PostForm } from './components/Forms/PostForm/PostForm';
import { DeletePost } from './components/Forms/DeleteForm/DeleteForm';

function App() {
  const isActiveModal = useSelector(isModalActive);
  const currentModalType = useSelector(getModalType);
  const currentPostId = useAppSelector(state => state.settings.currnetPostData?.id as string);
  
  const [handleModalClose] = useModalstatusChange();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  },[])

  return (
    <>
      <PostsList/>
    {isActiveModal && (
      <Modal onClose={handleModalClose}>
        {currentModalType === 'edit' && <PostForm />}
        {currentModalType === 'del' && <DeletePost id={currentPostId}/>}
      </Modal>
    )}
    </>
  )
}
export default App
