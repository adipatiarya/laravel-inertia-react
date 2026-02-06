import React from 'react';
import AppLayout from '@@/layouts/app-layout';
import { AppContent } from '@@/components/app-content';
import { Panel, PanelBody } from '@@/components/ui/panel';

const Index: React.FC = () => {
    return (
        <AppLayout title="Create or Update">
            <AppContent>
                <Panel>
                    <PanelBody>
                        <h1>User Form</h1>
                    </PanelBody>
                </Panel>
            </AppContent>
        </AppLayout>
    );
};

export default Index;
