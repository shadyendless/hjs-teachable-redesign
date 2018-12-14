import React from 'react';
import { Link } from 'gatsby';
import courseToc from '../course-toc';

const currentUrl = 'the-97-day-challenge/your-primitives-pdf';

const getSectionClass = (currentIndex, sectionIndex) => (
    currentIndex < sectionIndex ? 'finished' :
        currentIndex === sectionIndex ? 'current' :
            ''
);

const getPageClass = (currentIndex, pageIndex, currentSectionIndex, sectionIndex) => {
    if (currentIndex <= pageIndex && currentSectionIndex === sectionIndex) return 'active';
    if (sectionIndex > currentSectionIndex) return 'active';
    return '';
};

const TableOfContents = ({ data }) => {
    const splitUrl = currentUrl.split('/');
    const sectionIndex = courseToc.findIndex(section => section.sectionUrl === splitUrl[0]);
    const pageIndex = courseToc[sectionIndex].sectionPages.findIndex(page => page.url === splitUrl[1]);

    return (
        <aside className="font-sans pt-4">
            {courseToc.map((section, sIndex) => (
                <div className={`toc-header ${getSectionClass(sIndex, sectionIndex)}`} key={section.sectionUrl}>
                    <header className="font-bold tracking-wide text-sm text-grey-dark pb-2">{section.sectionTitle}</header>
                    <ul className="list-reset -ml-6">
                        {section.sectionPages.map((page, pIndex) => (
                            <li className={`toc-page ${getPageClass(pIndex, pageIndex, sIndex, sectionIndex)} leading-loose m-0`} key={`${section.sectionUrl}-${page.url}`}>
                                {sectionIndex === sIndex && pageIndex === pIndex ?
                                    <span className="current-link text-sm">{page.title}</span> :
                                    <Link
                                        className="no-underline text-grey hover:underline text-sm"
                                        to={`/${section.sectionUrl}/${page.url}`}>
                                        {page.title}
                                    </Link>
                                }
                            </li>
                        ))}
                    </ul>
                    <div className={`toc-spacer ${getSectionClass(sIndex, sectionIndex)}`}></div>
                </div>
            ))}
        </aside>
    );
};

export default TableOfContents;