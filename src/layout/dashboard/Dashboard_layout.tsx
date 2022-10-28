import React from 'react';
import './Dashboard_layout.css';

interface Dashboard_layoutProps {
    topContent?: React.ReactNode,
    bottomContent?: React.ReactNode,
    bottomleftContent?: React.ReactNode,
    bottomrightContent?: React.ReactNode,
    topContentHeight?: string,
    bottomContentHeight?: string,
    bottomLeftContentWidth?: string,
    bottomRightContentWidth?: string,
    bottomRightBackgroundColor?: string
    bottomLeftBackgroundColor?: string
    topBackgroundColor?: string
}

const Dashboard_layout = ({
    topContent,
    bottomContent,
    bottomleftContent,
    bottomrightContent,
    topContentHeight,
    bottomContentHeight,
    bottomLeftContentWidth,
    bottomRightContentWidth,
    bottomRightBackgroundColor,
    bottomLeftBackgroundColor,
    topBackgroundColor
}: Dashboard_layoutProps) => {
  return (
    <div className='dashboard--layout--wrapper'>
        <div className="dashboard--top--content" style={{
            height: topContentHeight ? topContentHeight : '10%',
            backgroundColor: topBackgroundColor ? topBackgroundColor : '#fff'
        }}>
            {topContent ? topContent : null}
        </div>

        <div className="dashboard--bottom--content" style={{
            height: bottomContentHeight ? bottomContentHeight : '90%',
        }}>
            <div className="dashboard--bottom--left--content" style={{
                width: bottomLeftContentWidth ? bottomLeftContentWidth : '20%',
                backgroundColor: bottomLeftBackgroundColor ? bottomLeftBackgroundColor : '#fff'
            }}>
                {bottomleftContent ? bottomleftContent : null}
            </div>

            <div className="dashboard--bottom--right--content" style={{
                width: bottomRightContentWidth ? bottomRightContentWidth : '80%',
                backgroundColor: bottomRightBackgroundColor ? bottomRightBackgroundColor : '#E5E5E5',
                overflowY: 'scroll'
            }}>
                {bottomrightContent ? bottomrightContent : null}
            </div>
        </div>
    </div>
  )
}

export default Dashboard_layout