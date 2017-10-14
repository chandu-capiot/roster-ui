import { any } from 'codelyzer/util/function';
import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';

declare var $: any;
declare var moment: any;
declare var fullCalendar: any;

@Component({
  selector: 'app-roaster',
  templateUrl: './roaster.component.html',
  styleUrls: ['./roaster.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RoasterComponent implements OnInit, AfterContentInit {
  options: any;
  isProject: any = true;
  projectResource: any = [
    {
      id: '1', building: 'Goodwin A', title: 'URC 18394B', name: 'Deck Backfill',
      subTitle: 'Woodside Energy',
      className: 'blue',
      children: [
        { id: 'a', title: 'Electrician', name: 'Phoebe Thompson', className: 'offered' },
        { id: 'b', title: 'Electrician', name: 'Herbert Reed', className: 'accepted' },
      ]
    },
    {
      id: '2', building: 'Goodwin A', title: 'URC 18394B', name: 'Maintenance Campaign',
      subTitle: 'Woodside Energy',
      className: 'blue',
      children: [
        { id: 'a', title: 'Electrician', name: 'Phoebe Thompson', className: 'offered' },
        { id: 'b', title: 'Electrician', name: 'Herbert Reed', className: 'accepted' },
        { id: 'c', title: 'Rigger Adv.', name: 'Zachary Montgomery', className: 'declined' },
        { id: 'd', title: 'Rigger Adv.', name: 'Elijah Lopez', className: 'accepted' },
        { id: 'e', title: 'Mechanical', name: 'Francisco Bell', className: 'accepted' },
      ]
    },
    {
      id: '3',
      building: 'Goodwin B',
      title: 'URC 18394B',
      name: 'Maintenance Campaign',
      subTitle: 'Woodside Energy',
      className: 'orange',
      children: [
        { id: 'f', title: 'Electrician', name: 'Phoebe Thompson', className: 'offered' },
        { id: 'g', title: 'Electrician', name: 'Herbert Reed', className: 'accepted' },
        { id: 'i', title: 'Rigger Adv.', name: 'Zachary Montgomery', className: 'declined' },
        { id: 'j', title: 'Rigger Adv.', name: 'Elijah Lopez', className: 'accepted' },
        { id: 'k', title: 'Mechanical', name: 'Francisco Bell', className: 'accepted' },
      ]
    }
  ];
  teamResource: any = [
    {
      id: '1', building: 'Goodwin A', title: 'Rigger Adv.', name: 'Owen Fowler',
      subTitle: 'Woodside Energy',
      children: [
        { id: 'a', title: 'URC 18394B', name: 'Fabric Maintenance A', className: 'offered' },
        { id: 'b', title: 'URC 18394B', name: 'Fabric Maintenance B', className: 'accepted' },
      ]
    },
    {
      id: '2', building: 'Goodwin B', title: 'Electrician', name: 'Landon Neal',
      subTitle: 'Woodside Energy',
      children: [
        { id: 'a', title: 'URC 18394B', name: 'Deck Crew', className: 'offered' },
        { id: 'b', title: 'URC 18394B', name: 'Maintenance Campaigns', className: 'accepted' },
        { id: 'c', title: 'URC 18394B', name: 'Fabric Maintenance A', className: 'declined' },
        { id: 'd', title: 'URC 18394B', name: 'Fabric Maintenance B', className: 'accepted' },
        { id: 'e', title: 'URC 18394B', name: 'Fabric Maintenance C', className: 'accepted' },
      ]
    },
    {
      id: '3',
      building: 'Goodwin C',
      title: 'Welder',
      name: 'Marc Moss',
      subTitle: 'Woodside Energy',
      children: [
        { id: 'f', title: 'URC 18394B', name: 'Decks Backfill', className: 'offered' },
        { id: 'g', title: 'URC 18394B', name: 'Maintenance Campaign', className: 'accepted' },
        { id: 'i', title: 'URC 18394B', name: 'Deck Crew', className: 'declined' },
        { id: 'j', title: 'URC 18394B', name: 'Fabric Maintenance A', className: 'accepted' },
        { id: 'k', title: 'URC 18394B', name: 'Fabric Maintenance B', className: 'accepted' },
      ]
    }
  ];

  ngOnInit() { }

  ngAfterContentInit() {
    this.initiateCalender();
    $('#roaster-calendar').fullCalendar(this.options);
  }

  initiateCalender() {
    const _self = this;
    let isDivider: any = false;
    let inviteHTMLStatus = false;

    return this.options = {
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      now: new Date(),
      // slotLabelFormat : 'D',
      editable: true,
      aspectRatio: 1.8,
      resourceAreaWidth: '25%',
      scrollTime: '00:00',
      header: {
        left: 'projects,teams',
        center: '',
        right: 'zoomOut,zoomIn prev,timeline2Weeks,timelineDay,next'
      },
      nowIndicator : true,
      defaultView: 'timeline2Weeks',
      views: {
        timelineDay: {
          type: 'timeline',
          duration: {
            days: 3
          },
          slotLabelFormat: 'h(:mm)t',
          slotDuration: '01:00',
          buttonText: 'Day'
        },
        timeline2Weeks: {
            type: 'timeline',
            duration: { weeks: 3 },
            slotDuration: '24:00',
            slotLabelFormat: 'D',
            buttonText: 'Week'
        },
        timeline5Weeks: {
          type: 'timeline',
          duration: { weeks: 6 },
          slotDuration: '24:00',
          slotLabelFormat: 'D',
          buttonText: 'Week'
        }
      },
      customButtons: {
        projects: {
          text: 'Projects',
          click: function() {
            _self.isProject = true;
            $('#roaster-calendar').fullCalendar('refetchResources');
            $('.fc-teams-button').removeClass('fc-state-disabled');
            $('.fc-projects-button').addClass('fc-state-disabled');
          }
        },
        teams: {
          text: 'Teams',
          click: function() {
            _self.isProject = false;
            $('#roaster-calendar').fullCalendar('refetchResources');
            $('.fc-projects-button').removeClass('fc-state-disabled');
            $('.fc-teams-button').addClass('fc-state-disabled');
          }
        },
        zoomOut: {
          text: '-',
          click: function() {
            $('#roaster-calendar').fullCalendar('changeView', 'timeline5Weeks');
            $('.fc-zoomOut-button').addClass('fc-state-disabled');
            $('.fc-zoomIn-button').removeClass('fc-state-disabled');
          },
          bootstrapGlyphicon : 'glyphicon glyphicon-zoom-in'
        },
        zoomIn: {
          text: '+',
          click: function() {
            $('#roaster-calendar').fullCalendar('changeView', 'timeline2Weeks');
            $('.fc-zoomOut-button').removeClass('fc-state-disabled');
            $('.fc-zoomIn-button').addClass('fc-state-disabled');
          }
        }
      },
      filterResourcesWithEvents: false,
      resourceGroupField: 'building',
      resources: function (callback) {
        $('#roaster-calendar').find('.roster-actions').remove();
        $('#roaster-calendar').find('.role-divider').remove();

        if (_self.isProject) {
          callback(_self.projectResource);
        } else {
          callback(_self.teamResource);
        }
      },
      events: [
        { id: '1', resourceId: 'a', start: '2017-10-14T02:00:00', end: '2017-10-14T07:00:00', title: 'Offered', className: 'offered' },
        { id: '2', resourceId: 'b', start: '2017-10-14T05:00:00', end: '2017-10-14T22:00:00', title: 'Accepted', className: 'accepted' },
        { id: '3', resourceId: 'c', start: '2017-10-16', end: '2017-10-18', title: 'Declined', className: 'declined' },
        { id: '4', resourceId: 'd', start: '2017-10-17T03:00:00', end: '2017-10-17T28:00:00', title: 'Accepted', className: 'accepted' },
        { id: '5', resourceId: 'e', start: '2017-10-17T00:30:00', end: '2017-10-17T22:30:00', title: 'Accepted', className: 'accepted' }
      ],
      eventRender: function (event, element, view) {
        const eventHTML = '<div class="fc-content event-title">' +
          '<span class="fc-title-icon">' + event.title + '</span>' +
          '</div>' +
          '<div class="fc-bg"></div>' +
          '<div class="fc-resizer fc-start-resizer"></div>' +
          '<div class="fc-resizer fc-end-resizer"></div>';
        $(element).html(eventHTML);
      },
      eventAfterAllRender: function (view) {
        $('button.fc-zoomOut-button').html('<span class="glyphicon glyphicon-zoom-out"></span>');
        $('.fc-event-container a').addClass('event-status');
        $('.fc-teams-button').removeClass('fc-state-disabled');
        $('.fc-projects-button').addClass('fc-state-disabled');
        $('.fc-zoomIn-button').addClass('fc-state-disabled');
        $('.fc-zoomOut-button').removeClass('fc-state-disabled');

        $('button.fc-zoomIn-button').html('<span class="glyphicon glyphicon-zoom-in"></span>');

        const resourceLevelLength = $( '.fc-resource-area .resource-level-3' ).length;

        if ($('.fc-resource-area').find('.roster-actions').length === 0) {
          $.each($( '.fc-resource-area .resource-level-3' ), function(key, val){
            const roleDividerLength = $(this).closest('tr').next().find('td.role-divider').length;
            const fcDividerLength = $(this).closest('tr').next().find('td.fc-divider').length;

            if ( roleDividerLength > 0 || fcDividerLength > 0) {
              $(this).closest('tr').after(_self.renderInviteHTML());
            }else if (resourceLevelLength - 1 === key) {
              $(this).closest('tr').after(_self.renderInviteHTML());
            }
          });
        }
        if ($('.fc-resource-area').find('roster-actions').length === 0) {
          $('#roaster-calendar').find('.roster-time-invite').remove();
          $.each($( '.fc-resource-area .fc-scroller-canvas tr' ), function(key, val){
            if ($(this).hasClass('roster-actions')) {
              $('.fc-time-area .fc-scroller-canvas tr').eq(key).after('<tr class="roster-time-invite"><td></td></tr>');
            }
          });
        }
      },
      resourceColumns: [
        {
          labelText: 'Search for projects, clients or tags...',
          field: 'title',
          render: function (resource, el) {
          }
        }
      ],
      viewRender: function (view, element) {
        inviteHTMLStatus = false;
        _self.renderSearchHTML();
        const startDate = $('#roaster-calendar').fullCalendar('getView').start;

        if (view.currentRangeUnit === 'week') {
          if ($('.fc-time-area').find('.week-str').length === 0) {
            _self.timelineWeekHeader(startDate);
          }
        }else if (view.currentRangeUnit === 'day')  {
           _self.timelineDayHeader(startDate);
        }

        $('i.arrow').on('click', function(){
          $(this).toggleClass('down up');
          const rowObj = $(this).closest('tr');
          const currentRowIndex = rowObj.index();
          if ($('.fc-body .fc-resource-area tr:eq(' + currentRowIndex + ') td').hasClass('fc-divider')) {
            isDivider = true;
          } else {
            isDivider = false;
          }

          if ($(this).hasClass('down')) {
            _self.collapseResource(rowObj, currentRowIndex, isDivider);
          }else {
            _self.expandResource(rowObj, currentRowIndex, isDivider);
          }
        });
      },
      resourceRender: function(resourceObj, resourceTds, bodyTds) {
          let resourceHTML: string;

          if (_self.isProject) {
            if (resourceObj.children.length) {
              _self.renderResourceProjectDivider(resourceObj, resourceTds, bodyTds);

              resourceHTML = _self.getResourceProjectParentDOM(resourceObj);
              $(resourceTds).addClass('divider-child');
              // console.log ($(resourceTds).parent().parent().html());
              // console.log("====");
              // if ($(resourceTds).closest('tr').next().length > 0) {
                $('<tr><td class="role-divider"></td></tr>').insertBefore($(resourceTds).closest('tr'));
                $('<tr><td class="role-divider"></td></tr>').insertBefore($(bodyTds).closest('tr'));
              // }
            } else {
              resourceHTML = _self.getResourceProjectChildrenDOM(resourceObj);
            }
          } else {
            if (resourceObj.children.length) {
              _self.renderResourceTeamDivider(resourceObj, resourceTds, bodyTds);

              resourceHTML = _self.getResourceTeamParentDOM(resourceObj);
              $(resourceTds).addClass('divider-child');
            } else {
              resourceHTML = _self.getResourceTeamChildrenDOM(resourceObj);
            }
          }
          $(resourceTds).html(resourceHTML);
      }
    };
  }

  timelineWeekHeader(startDate) {
    const colspanCount = $('.fc-head .fc-time-area .fc-content table tbody tr th').length;
    const row = $('<tr></tr>');
    let currentWeek: any = '';
    for (let i = 1, colspan = 7; i <= colspanCount / 7; i++) {
      const weekStartDate = startDate.clone().add((colspan * (i - 1)), 'days');
      const weekEndDate = startDate.clone().add((colspan * i) - 1, 'days');
      currentWeek = '';
      if (weekStartDate.format('w') === moment(new Date()).format('w')) {
        currentWeek = '<hr class="current-week"/>';
      }
      row.append('<th colspan="' + colspan + '" class="week-str">' + currentWeek + this.getWeekStr(weekStartDate, weekEndDate, 'week') + ' </th>');
    }

    if ($('.fc-head .fc-time-area colgroup').next().find('.current-week').length !== 1) {
      $('.fc-head .fc-time-area colgroup').next().prepend(row);
    }
  }

  timelineDayHeader(startDate) {
    const colspanCount = $('.fc-head .fc-time-area .fc-content table tbody tr th').length;
    const row = $('<tr></tr>');
    let currentWeek: any = '';
    for (let i = 1, colspan = 24; i <= colspanCount / 24; i++) {
      const weekStartDate = startDate.clone().add((colspan * (i - 1)), 'days');
      const weekEndDate = startDate.clone().add((colspan * i) - 1, 'days');
      currentWeek = '';
      if (weekStartDate.format('D') === moment(new Date()).format('D')) {
        currentWeek = '<hr class="current-week"/>';
      }

      row.append('<th colspan="' + colspan + '">' + currentWeek + this.getWeekStr(weekStartDate, weekEndDate, 'day') + ' </th>');
    }

    if ($('.fc-head .fc-time-area colgroup').next().find('.current-week').length !== 1) {
      $('.fc-head .fc-time-area colgroup').next().prepend(row);
    }
  }

  renderSearchHTML() {
    const searchHTML = '<div class="container">' +
        '<div class="row">' +
          '<div class="col-md-12">' +
            '<i class="fa fa-search fa-3"></i>' +
            '<input type="text" class="resource-search" placeholder="Search for projects, clients or tags..." id="resource-search-name"/>' +
          '</div>' +
        '</div>' +
    '</div>';

    $('.fc-resource-area .fc-widget-header').html(searchHTML);
  }

  renderInviteHTML() {
    const inviteRow = $('<tr class="roster-actions"></tr>');
    const inviteHTML =  inviteRow.append('<td><div class="container">' +
                            '<div class="row">' +
                              '<div class="col-md-5 roster-edit">Edit <span class="caret"></span></button></div>' +
                                '<div class="col-md-4 roster-filter dropdown">' +
                                  '<button class="btn btn-default disabled dropdown-toggle" type="button" data-toggle="dropdown">Filter' +
                                  '<span class="caret"></span></button>' +
                                  '<ul class="dropdown-menu">' +
                                    '<li><a href="#">HTML</a></li>' +
                                    '<li><a href="#">CSS</a></li>' +
                                    '<li><a href="#">JavaScript</a></li>' +
                                  '</ul>' +
                                '</div>' +
                              '<div class="col-md-3 roster-invite">' +
                                '<a href="#" class="btn btn-default disabled">' +
                                  '<span class="glyphicon glyphicon-plus"></span>' +
                                  'Invite' +
                                '</a>' +
                              '</div>' +
                            '</div>' +
                        '</div></td>');
    return inviteHTML;
  }
  getResourceProjectParentDOM(resourceObj) {
    const resourceHTML =  '<div class="container resource-level-2 ' + resourceObj.className + '">' +
                            '<div class="fc-cell-content row">' +
                                '<div class="fc-cell-text col-md-11">' +
                                    '<div class="resource-title">' + resourceObj.title + '</div>' +
                                    '<div class="resource-name">' + resourceObj.name + '</div>' +
                                '</div>' +
                                '<div class="col-md-1"><i class="arrow up"></i></div>' +
                            '</div>' +
                          '</div>';

    return resourceHTML;
  }

  getResourceProjectChildrenDOM(resourceObj) {
    const resourceHTML =  '<div class="container resource-level-3">' +
                            '<div class="fc-cell-content row">' +
                                '<div class="fc-cell-text col-md-3 resource-title">' + resourceObj.title + '</div>' +
                                '<div class="fc-cell-text col-md-9 text-right resource-name">' + resourceObj.name + '<img src="assets/images/avatar.png" class="profile-photo"></div>' +
                            '</div>' +
                          '</div>';
    return resourceHTML;
  }

  renderResourceProjectDivider (resourceObj, resourceTds, bodyTds) {
    const dividerResourceElementObj = $(resourceTds).closest('tr').prev();
    const dividerTimeAreaEleObj = $(bodyTds).closest('tr').prev();
    const dividerResourceText = dividerResourceElementObj.find('td.fc-divider span.fc-cell-text').text();

      if (dividerResourceText !== '' ) {
        const dividerHTML = '<div class="container resource-level-1">' +
                              '<div class="fc-cell-content row">' +
                                  '<div class="fc-cell-text col-md-11">' +
                                      '<div class="resource-title"> Woodside Energy </div>' +
                                      '<div class="resource-name">' + dividerResourceText + '</div>' +
                                  '</div>' +
                                  '<div class="col-md-1"><i class="arrow up"></i></div>' +
                              '</div>' +
                            '</div>';
        dividerResourceElementObj.find('td.fc-divider').html(dividerHTML);
      }

      dividerResourceElementObj.find('td.fc-divider').addClass(resourceObj.className);
      dividerTimeAreaEleObj.find('td.fc-divider').addClass(resourceObj.className);

    return;
  }

  getResourceTeamParentDOM(resourceObj) {
    const resourceHTML =  '<div class="container resource-level-2 ' + resourceObj.className + '">' +
                            '<div class="fc-cell-content row">' +
                                '<div class="col-md-1"><img src="assets/images/avatar.png" class="profile-photo"></div>'+
                                '<div class="col-md-10">' +
                                  '<div class="fc-cell-text col-md-11">' +
                                      '<div class="resource-name">' + resourceObj.name + '</div>' +
                                      '<div class="resource-title">' + resourceObj.title + '</div>' +
                                  '</div>' +
                                  '<div class="col-md-1"><i class="arrow up"></i></div>' +
                                '</div>' +
                            '</div>' +
                          '</div>';

    return resourceHTML;
  }

  getResourceTeamChildrenDOM(resourceObj) {
    const resourceHTML =  '<div class="container resource-level-3">' +
                            '<div class="fc-cell-content row">' +
                                '<div class="fc-cell-text col-md-3 resource-title">' + resourceObj.title + '</div>' +
                                '<div class="fc-cell-text col-md-9 text-right resource-name">' + resourceObj.name + '</div>' +
                            '</div>' +
                          '</div>';
    return resourceHTML;
  }

  renderResourceTeamDivider (resourceObj, resourceTds, bodyTds) {
    const dividerResourceElementObj = $(resourceTds).closest('tr').prev();
    const dividerTimeAreaEleObj = $(bodyTds).closest('tr').prev();
    const dividerResourceText = dividerResourceElementObj.find('td.fc-divider span.fc-cell-text').text();

    dividerResourceElementObj.find('td.fc-divider').addClass('teamDetails').empty();
    dividerTimeAreaEleObj.find('td.fc-divider').addClass('teamDetails').empty();

    return;
  }

  collapseResource(rowObj, currentRowIndex, isDivider) {
    for (let i = currentRowIndex + 1; i < rowObj.siblings().length + 1; i++) {
      if (isDivider === true && $('.fc-body .fc-resource-area tr:eq(' + i + ') td').hasClass('fc-divider')) {
        break;
      }

      if (!isDivider && ($('.fc-body .fc-resource-area tr:eq(' + i + ') td').hasClass('fc-divider') ||
        ($('.fc-body .fc-resource-area tr:eq(' + i + ') td div').hasClass('resource-level-2')))) {
        break;
      }

      $('.fc-body .fc-resource-area tr:eq(' + i + ')').hide();
      $('.fc-body .fc-time-area tr:eq(' + i + ')').hide();
    }
  }

  expandResource(rowObj, currentRowIndex, isDivider) {
    for (let i = currentRowIndex + 1; i < rowObj.siblings().length + 1; i++) {
      if (isDivider === true && $('.fc-body .fc-resource-area tr:eq(' + i + ') td').hasClass('fc-divider')) {
        break;
      }

      if (!isDivider && ($('.fc-body .fc-resource-area tr:eq(' + i + ') td').hasClass('fc-divider') ||
        ($('.fc-body .fc-resource-area tr:eq(' + i + ') td div').hasClass('resource-level-2')))) {
        break;
      }

      $('.fc-body .fc-resource-area tr:eq(' + i + ')').show();
      $('.fc-body .fc-time-area tr:eq(' + i + ')').show();
    }
  }

  getWeekStr (startDate, endDate, dayType) {
    const startDateStr = startDate.format('D');
    const endDateStr = endDate.format('D');
    let weekStr = startDate.format('D');
    if (dayType === 'day') {
      weekStr += ' ' + startDate.format('MMM');
    }else {
      if (endDate.format('MMM') !== startDate.format('MMM')) {
        weekStr += ' ' + startDate.format('MMM');
      }
      weekStr += ' - ' + endDate.format('D') + ' ' + endDate.format('MMM');
    }

    return weekStr;
  }
}
