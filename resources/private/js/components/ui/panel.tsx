import React, { ReactNode, useContext, useMemo, useState } from 'react';
import { slideToggle } from '@@/hooks/init-sidebar';
import { cn } from '@@/lib/util';

interface panelState {
    expand: boolean;
    reload: boolean;
    remove: boolean;
    toggleExpand: () => void;
    toggleReload: () => void;
    toggleRemove: () => void;
    toggleCollapse: (e: HTMLElement) => void;
}

type PanelProps = { className?: string; children: ReactNode; noButton?: boolean; theme?: string };

const PanelStat = React.createContext<panelState | null>(null);

const usePanelStat = () => {
    const context = useContext(PanelStat);

    if (!context) {
        throw new Error('context error()');
    }

    return context;
};

function Panel(props: PanelProps) {
    const [expand, setExpand] = useState(false);
    const [reload, setReload] = useState(false);
    const [remove, setRemove] = useState(false);

    const toggleExpand = () => {
        setExpand(!expand);
    };

    const toggleRemove = () => {
        setRemove(!remove);
    };

    const toggleCollapse = (e: HTMLElement) => {
        const panel = e.closest('.panel');
        if (!panel) return;

        const body = panel.querySelector('.panel-body') as HTMLElement | null;
        if (!body) return;

        slideToggle(body);
    };

    const toggleReload = () => {
        if (!reload) {
            setReload(true);

            setTimeout(() => {
                setReload(false);
            }, 2000);
        }
    };

    const contextValue = useMemo<panelState>(() => {
        return { expand, remove, reload, toggleExpand, toggleReload, toggleRemove, toggleCollapse };
    }, [expand, remove, reload]);

    return (
        <PanelStat.Provider value={contextValue}>
            {!remove && (
                <div
                    className={cn(
                        'panel',
                        props.theme ? props.theme : 'panel-inverse',
                        expand && 'panel-expand',
                        reload && 'panel-loading',
                        props.className,
                    )}
                >
                    {props.children}
                </div>
            )}
        </PanelStat.Provider>
    );
}

function PanelHeader(props: PanelProps) {
    const context = usePanelStat();

    return (
        <div className={cn('panel-heading', props.className)}>
            <h4 className="panel-title">{props.children}</h4>
            {!props.noButton && (
                <div className="panel-heading-btn">
                    <button className="btn btn-xs btn-icon btn-circle btn-default" onClick={context.toggleExpand}>
                        <i className="fa fa-expand"></i>
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-xs btn-icon btn-circle btn-success" onClick={context.toggleReload}>
                        <i className="fa fa-redo"></i>
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-xs btn-icon btn-circle btn-warning" onClick={(e) => context.toggleCollapse(e.target as HTMLElement)}>
                        <i className="fa fa-minus"></i>
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-xs btn-icon btn-circle btn-danger" onClick={context.toggleRemove}>
                        <i className="fa fa-times"></i>
                    </button>
                </div>
            )}
        </div>
    );
}

function PanelBody(props: PanelProps) {
    const context = useContext(PanelStat);
    return (
        <div className={cn('panel-body', props.className)}>
            {props.children}

            {context?.reload && (
                <div className="panel-loader">
                    <span className="spinner spinner-sm"></span>
                </div>
            )}
        </div>
    );
}

function PanelFooter(props: PanelProps) {
    return <div className={cn('panel-footer', props.className)}>{props.children}</div>;
}

export { Panel, PanelHeader, PanelBody, PanelFooter };
