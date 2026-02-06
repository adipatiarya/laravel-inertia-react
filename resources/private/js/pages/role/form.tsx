import React from 'react';
import AppLayout from '@@/layouts/app-layout';
import { AppContent } from '@@/components/app-content';
import { Panel, PanelBody } from '@@/components/ui/panel';

type Role = {
    id: number;
    name: string;
};

type RolesProps = {
    roles: Role[];
    modules: string[];
};

const Index: React.FC<RolesProps> = ({ roles, modules }) => {
    return (
        <AppLayout title="Create or Update">
            <AppContent>
                <Panel>
                    <PanelBody>
                        <h1>{JSON.stringify(modules)}</h1>
                    </PanelBody>
                </Panel>
            </AppContent>
        </AppLayout>
    );
};

export default Index;
