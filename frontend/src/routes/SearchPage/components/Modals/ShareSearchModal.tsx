// Copyright (c) 2021 Red Hat, Inc.
// Copyright Contributors to the Open Cluster Management project
import '@patternfly/react-core/dist/styles/base.css'
import React, { Fragment } from 'react'
import { ModalVariant } from '@patternfly/react-core'
import { AcmCodeSnippet, AcmModal } from '@open-cluster-management/ui-components'
import { useTranslation } from 'react-i18next'

export const ShareSearchModal = (props: any) => {
    const { t } = useTranslation(['search'])
    function GetUrl() {
        let url = decodeURIComponent(window.location.origin + window.location.pathname)
        let search = props.shareSearch ? props.shareSearch.searchText : ''
        return (url += `?filters={"textsearch":"${encodeURIComponent(search)}"}`)
    }

    return (
        <Fragment>
            <AcmModal
                title={t('search.modal.share.title')}
                variant={ModalVariant.small}
                isOpen={props.shareSearch !== undefined}
                onClose={props.onClose}
                actions={[]}
            >
                <p>Copy this private URL to share</p>
                <AcmCodeSnippet
                    id="snippet"
                    command={GetUrl()}
                    copyTooltipText={t('search.modal.share.copy.button')}
                    copySuccessText={t('search.modal.share.copied')}
                />
            </AcmModal>
        </Fragment>
    )
}
