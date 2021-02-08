import React from 'react'
import { render } from '@testing-library/react'
import { ShareSearchModal } from './ShareSearchModal'

test('renders share modal with searchText', () => {
    const { getByText } = render(<ShareSearchModal shareSearch={{ searchText: 'kind:pod name:testPod' }} />)
    expect(getByText('search.modal.share.title')).toBeInTheDocument()
    expect(getByText('http://localhost/?filters={"textsearch":"kind%3Apod%20name%3AtestPod"}')).toBeInTheDocument()
})

test('renders share modal without searchText', () => {
    const { getByText } = render(<ShareSearchModal shareSearch={null} />)
    expect(getByText('search.modal.share.title')).toBeInTheDocument()
})
