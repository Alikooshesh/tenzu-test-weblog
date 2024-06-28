import { render, screen, waitFor } from '@testing-library/react';
import PostPage from '@/app/[post]/page';
import { getPostData } from '@/services/postPage/postPageServices';
import { Ipost } from '@/interface/postInterface';
import { timestampToGre } from '@/utils/dateAndTimeHandlers';
import '@testing-library/jest-dom';

jest.mock('@/services/postPage/postPageServices');

const mockPostData: Ipost = {
  id: 1,
  title: 'Test Post',
  body: 'This is a test post body.',
  updated_at: 1628123456,
  userId : 1
};

describe('PostPage', () => {
  it('renders post data correctly', async () => {
    (getPostData as jest.Mock).mockResolvedValueOnce(mockPostData);

    render(await PostPage({params:{ post: 'test-post-1' }}));

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Post');
      expect(screen.getByText('This is a test post body.')).toBeInTheDocument();
    });

    const formattedTimestamp = timestampToGre(mockPostData.updated_at);
    expect(screen.getByText(formattedTimestamp)).toBeInTheDocument();
  });

});
