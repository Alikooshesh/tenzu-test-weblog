import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '@/app/page';
import { getPosts } from '@/services/homePage/homePageServices';
import { Ipost } from '@/interface/postInterface';
import '@testing-library/jest-dom';

jest.mock('@/services/homePage/homePageServices');

const mockPosts: Ipost[] = [
  { 
    id: 1,
    title: 'First Post',
    body: 'This is the first post',
    updated_at: 1628073600,
    userId : 1
  },
  {
    id: 2,
    title: 'Second Post',
    body: 'This is the second post',
    updated_at: 1628150000,
    userId : 1
  },
];

describe('HomePage', () => {
  it('renders a list of posts', async () => {
    (getPosts as jest.Mock).mockResolvedValueOnce(mockPosts);

    render(await HomePage());

    await waitFor(() => {
      expect(screen.getAllByRole('heading')).toHaveLength(2);
    });

    expect(screen.getByText('First Post')).toBeInTheDocument();
    expect(screen.getByText('This is the first post')).toBeInTheDocument();
    expect(screen.getByText('Second Post')).toBeInTheDocument();
    expect(screen.getByText('This is the second post')).toBeInTheDocument();
  });

  it('displays an error message when fetching posts fails', async () => {
    (getPosts as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

    render(await HomePage());

    await waitFor(() => {
      expect(screen.getByText('there is a problem')).toBeInTheDocument();
      expect(screen.getByText('try later')).toBeInTheDocument();
    });
  });
});
