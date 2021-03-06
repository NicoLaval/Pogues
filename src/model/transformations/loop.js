import { uuid } from 'utils/utils';
import { element } from 'prop-types';

export function remoteToState(remote, parent) {
  const {
    Name: name,
    MemberReference: memberReference,
    IterableReference: basedOn,
    Filter: filter,
    Label: addButtonLibel,
    Maximum: maximum,
    Minimum: minimum,
  } = remote;

  const id = remote.id || uuid();
  let initialMember = '';
  let finalMember = '';

  if (memberReference && memberReference.length === 1) {
    initialMember = memberReference[0];
    finalMember = memberReference[0];
  }

  if (memberReference && memberReference.length > 1) {
    initialMember = memberReference[0];
    finalMember = memberReference[1];
  }
  return {
    id,
    name: name,
    nameLoop: name,
    initialMember,
    finalMember,
    basedOn,
    filter,
    maximum,
    minimum,
    addButtonLibel,
    type: 'LOOP',
    TargetMode: [],
    pageBreak: false,
    parent: parent,
  };
}

export function stateToRemote(store) {
  return Object.values(store)
    .filter(element => element.type === 'LOOP')
    .map(component => {
      const {
        id,
        name,
        nameLoop,
        maximum,
        minimum,
        basedOn,
        filter,
        initialMember,
        finalMember,
        addButtonLibel,
        type,
      } = component;

      const memberReference = [];
      if (initialMember === finalMember) {
        memberReference[0] = initialMember;
      } else {
        memberReference[0] = initialMember;
        memberReference[1] = finalMember;
      }

      const response = {
        id,
        Name: nameLoop,
        MemberReference: memberReference,
        type: 'DynamicIterationType',
      };
      if (maximum) {
        response.Maximum = maximum;
        response.Step = '1';
        response.Minimum = minimum;
      }
      if (basedOn) {
        response.IterableReference = basedOn;
      }
      if (addButtonLibel) {
        response.Label = addButtonLibel;
      }
      if (filter) {
        response.Filter = filter;
      }
      return response;
    });
}
