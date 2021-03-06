import { uids as EFFECTS, effectImage } from '../../data/effects';
import synergy from '../../service/synergy';
import MenuHeader from '../Menu/MenuHeader.jsx';
import MenuSection from '../Menu/MenuSection.jsx';
import MenuOption from '../Menu/MenuOption.jsx';
import MenuOptionGroup from '../Menu/MenuOptionGroup.jsx';
import ImageIcon from '../ImageIcon.jsx';
import Icon from '../Icon.jsx';
import { requestRedraw } from '../../util/animation';
/* eslint-disable no-unused-vars */
import m from 'mithril';
/* eslint-enable no-unused-vars */

const SynergyMenu = {
    view(ctrl, { stars, effect }) {
        return (
            <div m="SynergyMenu" key={ `teams-menu-${ stars }` }>
                <MenuHeader title="synergies" />
                <MenuOption
                    icon={(
                        <Icon icon="list" />
                    )}
                    title="legend-show"
                    selected={ synergy.legend === true }
                    onclick={ () => {
                        synergy.legend = !synergy.legend;
                        requestRedraw();
                    }}
                />
                <MenuOption
                    icon={(
                        <Icon icon="users" />
                    )}
                    title="roster-use"
                    selected={ synergy.roster === true }
                    onclick={ () => {
                        synergy.roster = !synergy.roster;
                        requestRedraw();
                    }}
                />
                <MenuSection
                    title="show-by"
                />
                <MenuOptionGroup options={
                    [ '1', '2', '3', '4', '5' ].map((star) => (
                        <MenuOption
                            raw={ `${ star }★` }
                            selected={ stars === star }
                            href={ `/synergy/stars/${ star }` }
                        />
                    ))
                } />
                { EFFECTS.map((uid) => (
                        <MenuOption
                            icon={(
                                <ImageIcon
                                    src={ effectImage(uid, 'white') }
                                    alt={ effectImage(uid, 'black') }
                                    hoverSrc={ effectImage(uid, 'black') }
                                    hoverAlt={ effectImage(uid, 'white') }
                                    icon="square"
                                />
                            )}
                            alternate={ `effect-${ uid }-shortname` }
                            title={ `effect-${ uid }-name` }
                            selected={ uid === effect }
                            href={ `/synergy/effect/${ uid }` }
                        />
                )) }
            </div>
        );
    },
};

export default SynergyMenu;
